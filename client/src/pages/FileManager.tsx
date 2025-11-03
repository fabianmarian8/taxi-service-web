import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/_core/hooks/useAuth";
import { Upload, Trash2, Image, FileText, Download } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function FileManager() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<"photo" | "document" | "other">("photo");

  const utils = trpc.useUtils();
  const { data: files = [], isLoading } = trpc.files.list.useQuery();
  const uploadMutation = trpc.files.upload.useMutation({
    onSuccess: () => {
      toast.success("File uploaded successfully!");
      utils.files.list.invalidate();
      setIsOpen(false);
      setSelectedFile(null);
      setDescription("");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to upload file");
    },
  });

  const deleteMutation = trpc.files.delete.useMutation({
    onSuccess: () => {
      toast.success("File deleted successfully!");
      utils.files.list.invalidate();
    },
    onError: (error) => {
      toast.error(error.message || "Failed to delete file");
    },
  });

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Please select a file");
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      const base64 = (e.target?.result as string).split(",")[1];
      await uploadMutation.mutateAsync({
        filename: selectedFile.name,
        mimeType: selectedFile.type,
        fileSize: selectedFile.size,
        category,
        description: description || undefined,
        fileData: base64,
      });
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this file?")) {
      deleteMutation.mutate({ id });
    }
  };

  const getFileIcon = (mimeType: string) => {
    if (mimeType.startsWith("image/")) {
      return <Image className="w-5 h-5" />;
    }
    return <FileText className="w-5 h-5" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Please log in to access the file manager.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">File Manager</h1>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Upload className="w-4 h-4" />
                Upload File
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload File</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">File</label>
                  <Input
                    type="file"
                    onChange={handleFileSelect}
                    accept="image/*,.pdf,.doc,.docx"
                  />
                  {selectedFile && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Selected: {selectedFile.name} ({formatFileSize(selectedFile.size)})
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full px-3 py-2 border border-border rounded-md"
                  >
                    <option value="photo">Photo</option>
                    <option value="document">Document</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Add a description for this file..."
                    rows={3}
                  />
                </div>

                <Button
                  onClick={handleUpload}
                  disabled={!selectedFile || uploadMutation.isPending}
                  className="w-full"
                >
                  {uploadMutation.isPending ? "Uploading..." : "Upload"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p>Loading files...</p>
          </div>
        ) : files.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground mb-4">No files uploaded yet</p>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">Upload your first file</Button>
              </DialogTrigger>
            </Dialog>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {files.map((file: any) => (
              <Card key={file.id} className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getFileIcon(file.mimeType)}
                    <div>
                      <p className="font-semibold truncate">{file.filename}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatFileSize(file.fileSize)}
                      </p>
                    </div>
                  </div>
                </div>

                {file.description && (
                  <p className="text-sm text-muted-foreground mb-3">{file.description}</p>
                )}

                <div className="flex gap-2">
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" size="sm" className="w-full gap-1">
                      <Download className="w-4 h-4" />
                      View
                    </Button>
                  </a>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(file.id)}
                    disabled={deleteMutation.isPending}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
