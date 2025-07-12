import { useEffect, useState } from "react";

function ContactSection() {
  const [showForm, setShowForm] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    if (showForm) {
      setFormLoading(true);
      const container = document.getElementById("vismeForm");
      if (container) {
        // Remove any previous .visme_d divs
        container.innerHTML = "";
        // Add the .visme_d div
        const vismeDiv = document.createElement("div");
        vismeDiv.className = "visme_d";
        vismeDiv.setAttribute("data-title", "Email Contact Form");
        vismeDiv.setAttribute("data-url", "17eey6g3-email-contact-form?fullPage=true");
        vismeDiv.setAttribute("data-domain", "forms");
        vismeDiv.setAttribute("data-full-page", "true");
        vismeDiv.setAttribute("data-min-height", "100vh");
        vismeDiv.setAttribute("data-form-id", "135171");
        container.appendChild(vismeDiv);
      }

      // Load the script if not already present
      let script = document.querySelector('script[src="https://static-bundles.visme.co/forms/vismeforms-embed.js"]');
      const initVisme = () => {
        if (window.VismeForms) {
          window.VismeForms.init();
          setTimeout(() => setFormLoading(false), 1200);
        } else {
          // If VismeForms is not available, keep loading message and log error
          console.error("VismeForms is not available on window.");
        }
      };
      if (!script) {
        script = document.createElement("script");
        script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
        script.async = true;
        script.onload = () => setTimeout(initVisme, 100);
        script.onerror = () => {
          setFormLoading(false);
          console.error("Failed to load Visme embed script.");
        };
        document.body.appendChild(script);
      } else {
        setTimeout(initVisme, 100);
      }
    }
  }, [showForm]);

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-black px-4 font-winky"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-6xl font-['My_Soul',cursive] text-white mb-6 text-center lowercase">contact me</h2>
        <p className="text-lg text-gray-300 mb-8">
          Click below to open the contact form. I’d love to hear from you!
        </p>
        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
        >
          Open Form
        </button>
        <div
          id="vismeForm"
          className={`mt-10 ${showForm ? "block" : "hidden"} w-full relative`}
          style={{ minHeight: "100vh", overflow: "hidden" }}
        >
          {formLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-10">
              <span className="text-white text-xl font-semibold animate-pulse">Please wait…</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;