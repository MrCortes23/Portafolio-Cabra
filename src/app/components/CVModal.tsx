import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "@/app/context/TranslationContext";
import { Download, X, FileText } from "lucide-react";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  const { t } = useTranslation();

  const cvOptions = [
    { id: 1, key: "cv1", file: "/CV-RPA.pdf" },
    { id: 2, key: "cv2", file: "/CV-APPSCRIPT.pdf" },
    { id: 3, key: "cv3", file: "/CV-FULLSTACK.pdf" },
    { id: 4, key: "cv4", file: "/CV-DavidCortes.pdf" }
  ];

  const handleDownload = (file: string) => {
    window.open(file, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#161a33]/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg z-[101] bg-[#2d3365]/90 backdrop-blur-xl border border-[#F4BB46]/30 rounded-2xl shadow-2xl p-6 md:p-8 overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                {t("cvModal.title")}
              </h3>
              <button
                onClick={onClose}
                className="text-white/60 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
                title={t("cvModal.close")}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Options List */}
            <div className="flex flex-col gap-3">
              {cvOptions.map((cv) => (
                <button
                  key={cv.id}
                  onClick={() => handleDownload(cv.file)}
                  className="group cursor-pointer relative overflow-hidden flex items-center justify-between w-full text-left p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#F4BB46]/50 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#F4BB46]/20 text-[#F4BB46] group-hover:scale-110 transition-transform">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="text-white font-medium group-hover:text-[#F4BB46] transition-colors">
                      {t(`cvModal.options.${cv.key}`)}
                    </span>
                  </div>
                  <Download className="w-5 h-5 text-white/40 group-hover:text-[#F4BB46] opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                </button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
