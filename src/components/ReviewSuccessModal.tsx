// components/ReviewSuccessModal.tsx
"use client";

import { X, Star, ExternalLink } from "lucide-react";

// Define Props interface
interface ReviewSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  googleReviewUrl?: string;
  reviewerName?: string;
}

export function ReviewSuccessModal({ 
  isOpen, 
  onClose, 
  googleReviewUrl,
  reviewerName = "there"
}: ReviewSuccessModalProps) {
  
  if (!isOpen) return null;

  const handleGoogleReview = () => {
    if (googleReviewUrl) {
      window.open(googleReviewUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-md w-full p-6 border border-gray-200 dark:border-gray-800 shadow-2xl animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-green-600 dark:text-green-400 fill-current" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Thank You! 🎉</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            type="button"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Success Message */}
        <div className="mb-6">
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Hi {reviewerName}! Your review has been submitted successfully.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Your review will appear on our website after approval (usually within 24 hours).
          </p>
        </div>

        {/* Google Review CTA */}
        {googleReviewUrl && (
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800 mb-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Help Others Find Us!
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Would you also like to leave your review on Google? This helps other customers discover our services.
                </p>
                <button
                  onClick={handleGoogleReview}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Star className="w-4 h-4 fill-current" />
                  Leave Review on Google
                  <ExternalLink className="w-4 h-4" />
                </button>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 text-center">
                  Opens in a new tab • Takes 30 seconds
                </p>
              </div>
            </div>
          </div>
        )}

        {/* What's Next */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
            What happens next?
          </h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>We'll review your feedback</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Your review will be published within 24 hours</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>You'll receive a confirmation email</span>
            </li>
          </ul>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-semibold transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}

// Usage example:
/*
const [showSuccessModal, setShowSuccessModal] = useState(false);

<ReviewSuccessModal 
  isOpen={showSuccessModal}
  onClose={() => setShowSuccessModal(false)}
  googleReviewUrl="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID"
  reviewerName="John"
/>
*/