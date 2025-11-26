"use client";

import { motion } from "framer-motion";
import { FileText, Calendar, ExternalLink, Download } from "lucide-react";
import { certifications } from "@/lib/data";
import { GradientText } from "@/components/ui/gradient-text";
import { Card } from "@/components/ui/card";
import { Card3D } from "@/components/ui/card-3d";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

const issuerColors: Record<string, { container: string; badge: string }> = {
  Meta: {
    container: "bg-blue-500/20 border-blue-500/30 text-blue-400",
    badge: "bg-blue-500/20 border-blue-500/30 text-blue-400",
  },
  Google: {
    container: "bg-green-500/20 border-green-500/30 text-green-400",
    badge: "bg-green-500/20 border-green-500/30 text-green-400",
  },
  Packt: {
    container: "bg-purple-500/20 border-purple-500/30 text-purple-400",
    badge: "bg-purple-500/20 border-purple-500/30 text-purple-400",
  },
  IBM: {
    container: "bg-cyan-500/20 border-cyan-500/30 text-cyan-400",
    badge: "bg-cyan-500/20 border-cyan-500/30 text-cyan-400",
  },
  "University of Michigan": {
    container: "bg-yellow-500/20 border-yellow-500/30 text-yellow-400",
    badge: "bg-yellow-500/20 border-yellow-500/30 text-yellow-400",
  },
  "Wadhwani Foundation": {
    container: "bg-orange-500/20 border-orange-500/30 text-orange-400",
    badge: "bg-orange-500/20 border-orange-500/30 text-orange-400",
  },
  Cisco: {
    container: "bg-red-500/20 border-red-500/30 text-red-400",
    badge: "bg-red-500/20 border-red-500/30 text-red-400",
  },
  Oracle: {
    container: "bg-red-500/20 border-red-500/30 text-red-400",
    badge: "bg-red-500/20 border-red-500/30 text-red-400",
  },
};

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-24 px-4 md:px-6 lg:px-8 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16"
        >
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4" />
          <p className="text-blue-500 uppercase text-sm font-semibold tracking-wider mb-2">
            Certifications
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Professional <GradientText>Certifications</GradientText>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const classes = issuerColors[cert.issuer] || issuerColors.Meta;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              >
                <Card3D>
                  <Card className="p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 hover:border-blue-500/50 transition-all h-full flex flex-col group">
                    {/* PDF Preview Area with Thumbnail */}
                    {cert.pdfPath && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="mb-4 relative group/preview cursor-pointer overflow-hidden rounded-lg border border-white/10 hover:border-blue-500/50 transition-all">
                            <div className={`aspect-video ${classes.container} flex flex-col items-center justify-center relative overflow-hidden`}>
                              {/* Certificate Preview Design */}
                              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
                                {/* Certificate-like preview */}
                                <div className="bg-white/10 rounded-lg p-4 w-full max-w-[80%] border border-white/20 shadow-lg">
                                  <div className="text-center mb-2">
                                    <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
                                      <FileText className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="h-1 w-20 mx-auto bg-white/30 rounded-full mb-2" />
                                    <div className="h-0.5 w-32 mx-auto bg-white/20 rounded-full" />
                                  </div>
                                  <div className="text-center mt-4">
                                    <p className="text-xs text-white/80 font-semibold mb-1">{cert.issuer}</p>
                                    <p className="text-[10px] text-white/60 line-clamp-2">{cert.title}</p>
                                  </div>
                                </div>
                              </div>
                              {/* PDF Badge */}
                              <div className="absolute top-2 right-2 px-2 py-1 rounded bg-blue-500/90 text-white text-xs font-semibold z-20 shadow-lg">
                                PDF
                              </div>
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 opacity-0 group-hover/preview:opacity-100 transition-opacity bg-black/60 flex items-center justify-center z-30">
                                <div className="text-center">
                                  <div className="text-white text-sm font-semibold mb-1">View Certificate</div>
                                  <div className="text-white/80 text-xs">Click to open PDF</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-5xl max-h-[90vh] overflow-auto bg-[#1a1a1a] border-white/10">
                          <DialogTitle className="sr-only">{cert.title}</DialogTitle>
                          <div className="p-4">
                            <h3 className="text-xl font-semibold text-white mb-4">{cert.title}</h3>
                            <iframe
                              src={`${cert.pdfPath}#toolbar=0`}
                              className="w-full h-[75vh] rounded-lg border border-white/10"
                              title={cert.title}
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}

                    {/* Content */}
                    <div className="flex-1">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${classes.badge} mb-4`}>
                        <span className="text-xs font-semibold">{cert.issuer}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-white">{cert.title}</h3>
                      {cert.date && (
                        <div className="flex items-center gap-1 text-sm text-gray-300 mb-4">
                          <Calendar className="w-4 h-4" />
                          {cert.date}
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 mt-4">
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all text-sm text-white"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View
                        </a>
                      )}
                      {cert.pdfPath && (
                        <a
                          href={cert.pdfPath}
                          download
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-all text-sm border border-blue-500/30"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </a>
                      )}
                    </div>
                  </Card>
                </Card3D>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
