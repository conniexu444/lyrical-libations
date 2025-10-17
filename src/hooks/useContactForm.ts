import { useState, useCallback, type FormEvent, type ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface UseContactFormReturn {
  formData: FormData;
  errors: FormErrors;
  isSubmitting: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  resetForm: () => void;
}

const INITIAL_FORM_STATE: FormData = {
  name: "",
  email: "",
  message: "",
};

/**
 * Custom hook for managing contact form state and validation
 *
 * @returns Form state and handlers
 */
export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = useCallback((data: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!data.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  }, []);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));

      // Clear error for this field when user starts typing
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const validationErrors = validateForm(formData);

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setIsSubmitting(true);

      try {
        // TODO: Implement actual form submission logic
        // For now, just simulate a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log("Form submitted:", formData);

        // Reset form on success
        setFormData(INITIAL_FORM_STATE);
        setErrors({});

        // Show success message (can be extended with a toast/notification)
        alert("Message sent successfully!");
      } catch (error) {
        console.error("Form submission error:", error);
        setErrors({ message: "Failed to send message. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validateForm]
  );

  const resetForm = useCallback(() => {
    setFormData(INITIAL_FORM_STATE);
    setErrors({});
    setIsSubmitting(false);
  }, []);

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
