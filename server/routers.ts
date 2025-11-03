import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { getFiles, getFileById, insertFile, deleteFile } from "./db";
import { storagePut } from "./storage";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  files: router({
    list: publicProcedure.query(async () => {
      return await getFiles();
    }),

    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return await getFileById(input.id);
      }),

    upload: protectedProcedure
      .input(
        z.object({
          filename: z.string(),
          mimeType: z.string(),
          fileSize: z.number(),
          category: z.enum(["photo", "document", "other"]).default("other"),
          description: z.string().optional(),
          fileData: z.string(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        try {
          const buffer = Buffer.from(input.fileData, "base64");
          const timestamp = Date.now();
          const fileKey = `taxi-files/${ctx.user.id}/${timestamp}-${input.filename}`;

          const { url } = await storagePut(fileKey, buffer, input.mimeType);

          const result = await insertFile({
            fileKey,
            url,
            filename: input.filename,
            mimeType: input.mimeType,
            fileSize: input.fileSize,
            category: input.category,
            description: input.description || null,
            uploadedBy: ctx.user.id,
          });

          return {
            success: true,
            url,
            fileKey,
          };
        } catch (error) {
          console.error("[File Upload Error]", error);
          throw new Error("Failed to upload file");
        }
      }),

    delete: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input, ctx }) => {
        const file = await getFileById(input.id);
        if (!file) {
          throw new Error("File not found");
        }

        if (ctx.user.role !== "admin" && file.uploadedBy !== ctx.user.id) {
          throw new Error("Unauthorized: You can only delete your own files");
        }

        const success = await deleteFile(input.id);
        return { success };
      }),
  }),
});

export type AppRouter = typeof appRouter;
