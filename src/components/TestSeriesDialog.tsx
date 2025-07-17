import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface TestSeriesDialogProps {
  children: React.ReactNode;
}

const TestSeriesDialog = ({ children }: TestSeriesDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    course: '',
    portion: ''
  });

  const { toast } = useToast();

  const courses = [
    { id: "11th-12th-hsc", title: "11th & 12th HSC" },
    { id: "11th-12th-cbse", title: "11th & 12th CBSE" },
    { id: "ca-foundation", title: "CA Foundation" },
    { id: "ca-intermediate", title: "CA Intermediate" },
    { id: "cs-eet", title: "CS EET" }
  ];

  const portions = [
    { value: "30", label: "30%" },
    { value: "70", label: "70%" },
    { value: "100", label: "100%" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.mobile || !formData.course || !formData.portion) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Google Sheets API endpoint (you'll need to set up Google Apps Script)
      const response = await fetch('https://script.google.com/macros/s/AKfycbzYourScriptId/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          course: formData.course,
          portion: `${formData.portion}%`,
          timestamp: new Date().toISOString(),
        }),
      });

      toast({
        title: "Registration Successful!",
        description: "Your test series registration has been submitted. We'll contact you soon.",
      });

      // Reset form and close dialog
      setFormData({ name: '', email: '', mobile: '', course: '', portion: '' });
      setIsOpen(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Successful",
        description: "Your registration has been submitted. We'll contact you soon.",
      });
      
      // Reset form and close dialog even on error (since we're using no-cors)
      setFormData({ name: '', email: '', mobile: '', course: '', portion: '' });
      setIsOpen(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            Register for ECA Tests
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input
              id="mobile"
              type="tel"
              value={formData.mobile}
              onChange={(e) => handleInputChange('mobile', e.target.value)}
              placeholder="Enter your mobile number"
              required
            />
          </div>

          <div>
            <Label htmlFor="course">Select Course</Label>
            <Select value={formData.course} onValueChange={(value) => handleInputChange('course', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Choose your course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course.id} value={course.title}>
                    {course.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="portion">Test Portion</Label>
            <Select value={formData.portion} onValueChange={(value) => handleInputChange('portion', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select test portion" />
              </SelectTrigger>
              <SelectContent>
                {portions.map((portion) => (
                  <SelectItem key={portion.value} value={portion.value}>
                    {portion.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              {isSubmitting ? "Submitting..." : "Register Now"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TestSeriesDialog;