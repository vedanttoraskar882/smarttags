import React, { useState } from 'react';
import type { PilotRequest, FormErrors } from '../types';
import { savePilotRequest, isValidPhoneNumber, isValidEmail, getStoredPilotRequests } from '../utils/storage';
import { CheckCircle2, AlertCircle, Send, Building, User, Phone, Mail, ShieldCheck } from 'lucide-react';

interface PilotFormProps {
  onSuccess?: () => void;
  isModal?: boolean;
}

export const PilotForm: React.FC<PilotFormProps> = ({ onSuccess, isModal = false }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [organisationName, setOrganisationName] = useState('');

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [storedCount, setStoredCount] = useState<number>(() => getStoredPilotRequests().length);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Full Name: required, min 2 chars
    if (!fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Full Name must be at least 2 characters.';
    }

    // Phone Number: required, allow numbers, spaces, hyphens, parentheses, plus
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required.';
    } else if (!isValidPhoneNumber(phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number (digits, spaces, hyphens, parentheses).';
    }

    // Email: required, valid format
    if (!emailAddress.trim()) {
      newErrors.emailAddress = 'Email Address is required.';
    } else if (!isValidEmail(emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email address.';
    }

    // Organisation Name: required, min 2 chars
    if (!organisationName.trim()) {
      newErrors.organisationName = 'Organisation Name is required.';
    } else if (organisationName.trim().length < 2) {
      newErrors.organisationName = 'Organisation Name must be at least 2 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const newSubmission: PilotRequest = {
      fullName: fullName.trim(),
      phoneNumber: phoneNumber.trim(),
      emailAddress: emailAddress.trim(),
      organisationName: organisationName.trim(),
      submittedAt: new Date().toISOString(),
    };

    const saved = savePilotRequest(newSubmission);

    if (saved) {
      setSuccessMessage('Thank you. Your pilot request has been saved successfully.');
      setFullName('');
      setPhoneNumber('');
      setEmailAddress('');
      setOrganisationName('');
      setErrors({});
      setStoredCount(getStoredPilotRequests().length);

      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 2200);
      }
    } else {
      setErrors({ fullName: 'Could not store request in local browser storage.' });
    }

    setIsSubmitting(false);
  };

  return (
    <div
      className={`rounded-2xl ${
        isModal
          ? 'bg-slate-900 border border-white/10 p-6 sm:p-8'
          : 'glass-panel p-6 sm:p-10 border-white/10 shadow-2xl relative overflow-hidden'
      }`}
    >
      {!isModal && (
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[90px] pointer-events-none" />
      )}

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" /> B2B & Operations Inquiry
          </span>
          <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-white/5">
            Active Requests: {storedCount}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-white tracking-tight font-['Plus_Jakarta_Sans']">
          Request a Pilot
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Explore privacy-first vehicle contact or launch a depot pilot. Submissions are safely registered.
        </p>
      </div>

      {/* Success Notification */}
      {successMessage && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-sm flex items-start gap-3 animate-in fade-in duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-emerald-300">{successMessage}</div>
            <div className="text-xs text-emerald-400/80 mt-0.5">
              Stored securely in browser localStorage (Key: <code>smarttagsPilotRequests</code>).
            </div>
          </div>
        </div>
      )}

      {/* Form with required fields */}
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Full Name <span className="text-cyan-400">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
              }}
              placeholder="e.g. John Smith"
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.fullName
                  ? 'border-rose-500 focus:ring-rose-500/40'
                  : 'border-white/10 focus:border-cyan-400 focus:ring-cyan-500/30'
              }`}
            />
          </div>
          {errors.fullName && (
            <div className="flex items-center gap-1.5 mt-1.5 text-xs text-rose-400">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.fullName}</span>
            </div>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phoneNumber" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Phone Number <span className="text-cyan-400">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Phone className="w-4 h-4" />
            </div>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                if (errors.phoneNumber) setErrors((prev) => ({ ...prev, phoneNumber: undefined }));
              }}
              placeholder="e.g. +44 7700 900000"
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.phoneNumber
                  ? 'border-rose-500 focus:ring-rose-500/40'
                  : 'border-white/10 focus:border-cyan-400 focus:ring-cyan-500/30'
              }`}
            />
          </div>
          {errors.phoneNumber && (
            <div className="flex items-center gap-1.5 mt-1.5 text-xs text-rose-400">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.phoneNumber}</span>
            </div>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="emailAddress" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Email Address <span className="text-cyan-400">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={emailAddress}
              onChange={(e) => {
                setEmailAddress(e.target.value);
                if (errors.emailAddress) setErrors((prev) => ({ ...prev, emailAddress: undefined }));
              }}
              placeholder="e.g. john@logistics-example.co.uk"
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.emailAddress
                  ? 'border-rose-500 focus:ring-rose-500/40'
                  : 'border-white/10 focus:border-cyan-400 focus:ring-cyan-500/30'
              }`}
            />
          </div>
          {errors.emailAddress && (
            <div className="flex items-center gap-1.5 mt-1.5 text-xs text-rose-400">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.emailAddress}</span>
            </div>
          )}
        </div>

        {/* Organisation Name */}
        <div>
          <label htmlFor="organisationName" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Organisation Name <span className="text-cyan-400">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Building className="w-4 h-4" />
            </div>
            <input
              type="text"
              id="organisationName"
              name="organisationName"
              value={organisationName}
              onChange={(e) => {
                setOrganisationName(e.target.value);
                if (errors.organisationName) setErrors((prev) => ({ ...prev, organisationName: undefined }));
              }}
              placeholder="e.g. Midlands Transport & Freight Ltd"
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.organisationName
                  ? 'border-rose-500 focus:ring-rose-500/40'
                  : 'border-white/10 focus:border-cyan-400 focus:ring-cyan-500/30'
              }`}
            />
          </div>
          {errors.organisationName && (
            <div className="flex items-center gap-1.5 mt-1.5 text-xs text-rose-400">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.organisationName}</span>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-900 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 cursor-pointer disabled:opacity-60"
          >
            <Send className="w-4 h-4 text-slate-900" />
            <span>Submit Pilot Request</span>
          </button>
        </div>

        <div className="text-center pt-2">
          <span className="text-[11px] text-slate-400">
            Privacy Guaranteed · No unsolicited marketing · Zero external data transmission
          </span>
        </div>
      </form>
    </div>
  );
};
