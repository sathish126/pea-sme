import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is the purpose of this event?",
      answer: "Our event aims to bring together students, professionals, and enthusiasts to explore and learn through a range of workshops and activities."
    },
    {
      question: "How can I register for the workshops?",
      answer: "You can register through our website by signing up and selecting the workshops you’re interested in under the Events section."
    },
    {
      question: "Is there an entry fee for participants?",
      answer: "Entry to the main event is free, but specific workshops may have a registration fee. Please check the individual event details for more information."
    },
    {
      question: "Will there be a certificate for attending the workshops?",
      answer: "Yes, all participants will receive a certificate upon successful completion of each workshop."
    },
    {
      question: "Who can I contact for further queries?",
      answer: "You can reach out to us via the Contact section on this page, and our team will be happy to assist you."
    },
  ];

  return (
    <section id="faq" className="min-h-screen flex items-center bg-gray-100 py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">FAQ</h2>
        <p className="text-lg text-center mb-8">Frequently asked questions and answers.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-1xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{index + 1}. {faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
