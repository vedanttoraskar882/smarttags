import React, { useState, useEffect } from 'react';
import { X, Database, Clock, Building, Phone, Mail, User, ShieldCheck, RefreshCw } from 'lucide-react';
import { getStoredPilotRequests, STORAGE_KEY } from '../utils/storage';
import type { PilotRequest } from '../types';

interface StoredRequestsModalProps {
  onClose: () => void;
}

export const StoredRequestsModal: React.FC<StoredRequestsModalProps> = ({ onClose }) => {
  const [requests, setRequests] = useState<PilotRequest[]>([]);

  const loadRequests = () => {
    setRequests(getStoredPilotRequests());
  };

  useEffect(() => {
    loadRequests();
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl bg-slate-900 border border-white/10 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <h3 id="modal-title" className="text-base font-bold text-white">
                Stored Pilot Requests (localStorage)
              </h3>
              <p className="text-xs text-slate-400">
                Key: <code className="text-cyan-400">{STORAGE_KEY}</code> · Frontend-only persistence
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={loadRequests}
              title="Refresh requests"
              className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {requests.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <ShieldCheck className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <p className="text-sm font-medium text-slate-300">No pilot requests stored yet.</p>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Submit the "Request a Pilot" form on this page to append records into browser localStorage.
              </p>
            </div>
          ) : (
            requests.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-950/80 border border-white/5 rounded-xl p-4 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800/80">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    Submission #{requests.length - idx}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {new Date(item.submittedAt).toLocaleString('en-GB')}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-semibold text-white">{item.fullName}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{item.organisationName}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-mono">{item.phoneNumber}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{item.emailAddress}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400">
          <span>Total records: {requests.length}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
