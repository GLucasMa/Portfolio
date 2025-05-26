import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Agregar timestamp automáticamente al campo hidden "time"
    const now = new Date().toLocaleString();
    const timeInput = formRef.current.querySelector('input[name="time"]') as HTMLInputElement;
    if (timeInput) timeInput.value = now;

    emailjs
      .sendForm('service_xc9ycdz', 'template_4xnrtut', formRef.current, '5eFWMauzBYWcn7_6e')
      .then(
        () => {
          alert('Mensaje enviado correctamente!');
          formRef.current?.reset();
        },
        (error) => {
          alert('Ocurrió un error al enviar el mensaje.');
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Ponte en contacto</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-Teal mr-3" />
                  <span className="text-gray-600">lucasgut3001@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-Teal mr-3" />
                  <span className="text-gray-600">+54 9 (3541) 57-5357</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-Teal mr-3" />
                  <span className="text-gray-600">Villa Carlos Paz, Córdoba, AR</span>
                </div>
              </div>
            </div>
            <div>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>

                {/* Campo oculto para agregar la hora automáticamente */}
                <input type="hidden" name="time" />

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


// bg-blue-600