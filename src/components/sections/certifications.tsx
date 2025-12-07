"use client";

import { FileText, Calendar, ExternalLink, Download } from "lucide-react";
import { certifications } from "@/lib/data";
import { GradientText } from "@/components/ui/gradient-text";
import { Card } from "@/components/ui/card";
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
        <div className="mb-16">
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4" />
          <p className="text-blue-500 uppercase text-sm font-semibold tracking-wider mb-2">
            Certifications
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Professional <GradientText>Certifications</GradientText>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {certifications.map((cert, index) => {
            const classes = issuerColors[cert.issuer] || issuerColors.Meta;

            return (
              <div key={index} className="flex h-full">
                <Card className="p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 h-full w-full flex flex-col group">
                    {/* Header with Icon - Fixed Height */}
                    <div className="flex items-start gap-3 mb-4 min-h-[100px]">
                      <div className={`p-3 rounded-lg ${classes.container} flex-shrink-0`}>
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${classes.badge} mb-2 w-fit`}>
                          <span className="text-xs font-semibold">{cert.issuer}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 min-h-[3.5rem]">{cert.title}</h3>
                        {cert.date && (
                          <div className="flex items-center gap-1 text-sm text-gray-400 mt-auto">
                            <Calendar className="w-4 h-4" />
                            {cert.date}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* PDF Preview Area */}
                    {cert.pdfPath && (
                      <Dialog>
                        <div className="mb-4 relative rounded-lg border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] group/preview flex-shrink-0">
                          <DialogTrigger asChild>
                            <div className="cursor-pointer overflow-hidden rounded-lg">
                              <div className={`aspect-video ${classes.container} flex flex-col items-center justify-center relative overflow-hidden`}>
                                {/* Professional Preview */}
                                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6">
                                  <div className={`w-16 h-16 rounded-xl ${classes.container} flex items-center justify-center mb-3 border ${classes.badge}`}>
                                    <FileText className="w-8 h-8 text-white" />
                                  </div>
                                  <div className="text-center">
                                    <p className={`text-xs font-semibold mb-1 ${classes.badge.split(' ')[2]}`}>{cert.issuer}</p>
                                    <p className="text-[10px] text-gray-300 line-clamp-2 px-2">{cert.title}</p>
                                  </div>
                                </div>
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center z-20">
                                  <div className="text-center">
                                    <div className="text-white text-sm font-semibold">Click to View</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </DialogTrigger>
                          {/* Download Icon - Upper Right - Outside DialogTrigger */}
                          <a
                            href={cert.pdfPath}
                            download
                            className="absolute top-2 right-2 p-2 rounded-lg bg-blue-500/90 hover:bg-blue-500 text-white z-50 shadow-lg transition-colors pointer-events-auto"
                            style={{ zIndex: 9999 }}
                            title="Download PDF"
                          >
                            <Download className="w-4 h-4" />
                          </a>
                        </div>
                        <DialogContent className="max-h-[98vh] overflow-auto bg-[#1a1a1a] border-white/10 p-0" style={{ maxWidth: '95vw', width: '95vw' }}>
                          <DialogTitle className="sr-only">{cert.title}</DialogTitle>
                          <div className="p-4">
                            <h3 className="text-xl font-semibold text-white mb-4">{cert.title}</h3>
                            <iframe
                              src={`${cert.pdfPath}#toolbar=0&zoom=page-fit`}
                              className="w-full h-[90vh] rounded-lg border border-white/10"
                              title={cert.title}
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}

                    {/* Actions - Push to bottom */}
                    {cert.url && (
                      <div className="flex gap-2 mt-auto pt-4">
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-sm text-white hover:bg-white/10 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View
                        </a>
                      </div>
                    )}
                  </Card>
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
