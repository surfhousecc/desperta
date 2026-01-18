import React, { useRef } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { useToast } from "../../components/ui/toast";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/gallery1.jpg", alt: "Gallery 1" },
  { src: "https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/gallery2.jpg", alt: "Gallery 2" },
  { src: "https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/gallery3.jpg", alt: "Gallery 3" },
];

const desktopGalleryImages = [
  { src: "https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/desktopgallery1.jpg", alt: "Desktop Gallery 1" },
  { src: "https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/desktopgallery2.jpg", alt: "Desktop Gallery 2" },
  { src: "https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/desktopgallery3.jpg", alt: "Desktop Gallery 3" },
];


const donationTiers = [
  {
    name: "Semente",
    amount: "20",
    description: "Um pequeno gesto que faz florescer o novo.",
    icon: "https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/semente.png",
    pixCode: "00020126430014BR.GOV.BCB.PIX0121desperta@surfhouse.cc520400005303986540520.005802BR5925SURFHOUSE COMUNIDADE CRIS6013FLORIANOPOLIS62140510DESPERTA206304B67C",
  },
  {
    name: "Raiz",
    amount: "50",
    description: "Apoie o crescimento e fortaleça o movimento.",
    icon: "https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/raiz.png",
    pixCode: "00020126430014BR.GOV.BCB.PIX0121desperta@surfhouse.cc520400005303986540550.005802BR5925SURFHOUSE COMUNIDADE CRIS6013FLORIANOPOLIS62140510DESPERTA50630458F4",
  },
  {
    name: "Crescimento",
    amount: "100",
    description: "Ajude o Desperta a alcançar ainda mais pessoas.",
    icon: "https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/crescimento.png",
    pixCode: "00020126430014BR.GOV.BCB.PIX0121desperta@surfhouse.cc5204000053039865406100.005802BR5925SURFHOUSE COMUNIDADE CRIS6013FLORIANOPOLIS62150511DESPERTA100630454EC",
  },
  {
    name: "Floresta",
    amount: "200",
    description: "Plante generosidade que se multiplica.",
    icon: "https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/floresta.png",
    pixCode: "00020126430014BR.GOV.BCB.PIX0121desperta@surfhouse.cc5204000053039865406200.005802BR5925SURFHOUSE COMUNIDADE CRIS6013FLORIANOPOLIS62150511DESPERTA20063043861",
  },
];

export const Frame = (): JSX.Element => {
  const { showToast } = useToast();
  const testimonialScrollRef = useRef<HTMLDivElement>(null);
  const desktopTestimonialScrollRef = useRef<HTMLDivElement>(null);
  const [showTshirtGallery, setShowTshirtGallery] = React.useState(false);
  const [currentTshirtSlide, setCurrentTshirtSlide] = React.useState(0);

  const tshirtImages = [
    "https://media.atomicatpages.net/u/yJF5BjzsAieaSeMMensTxlQujzj2/Pictures/yCIFej5074147.webp",
    "https://media.atomicatpages.net/u/yJF5BjzsAieaSeMMensTxlQujzj2/Pictures/nwbHWk5074147.webp",
    "https://media.atomicatpages.net/u/yJF5BjzsAieaSeMMensTxlQujzj2/Pictures/KMNNtb5074147.webp"
  ];

  const scrollTshirts = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentTshirtSlide(prev => prev === 0 ? tshirtImages.length - 1 : prev - 1);
    } else {
      setCurrentTshirtSlide(prev => prev === tshirtImages.length - 1 ? 0 : prev + 1);
    }
  };

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialScrollRef.current) {
      const scrollAmount = testimonialScrollRef.current.clientWidth;
      testimonialScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollDesktopTestimonials = (direction: 'left' | 'right') => {
    if (desktopTestimonialScrollRef.current) {
      const container = desktopTestimonialScrollRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleDonationClick = (pixCode: string, amount: string) => {
    navigator.clipboard.writeText(pixCode);
    showToast("Código PIX copiado. Acesse seu banco para efetivar o pagamento.");

    if (amount === "100" || amount === "200") {
      setShowTshirtGallery(true);
    }
  };

  const handleCustomAmountClick = () => {
    navigator.clipboard.writeText("desperta@surfhouse.cc");
    showToast("O e-mail desperta@surfhouse.cc acaba de ser copiado para sua área de transferência. Acesse seu banco e participe oferecendo o seu melhor 💛");
  };

  const handleSaveToCalendar = () => {
    const event = {
      title: "Acordar cedo para ir ao DESPERTA ☀️",
      start: new Date("2025-11-22T04:30:00"),
      end: new Date("2025-11-22T07:30:00"),
      location: "Av. Campeche 720, Florianópolis SC, Brazil",
      details: "Um Encontro com Deus ao Nascer do Sol"
    };

    const formatDateForICS = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//DESPERTA//Event//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `DTSTART:${formatDateForICS(event.start)}`,
      `DTEND:${formatDateForICS(event.end)}`,
      `SUMMARY:${event.title}`,
      `LOCATION:${event.location}`,
      `DESCRIPTION:${event.details}`,
      `UID:${Date.now()}@desperta.com`,
      `DTSTAMP:${formatDateForICS(new Date())}`,
      'STATUS:CONFIRMED',
      'SEQUENCE:0',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);

    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);
    const isMobile = isIOS || isAndroid;

    if (isMobile) {
      const link = document.createElement('a');
      link.href = url;
      link.download = 'desperta.ics';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      if (isIOS) {
        showToast("Arquivo baixado! Toque no arquivo para adicionar ao Calendário do iOS.");
      } else {
        showToast("Arquivo baixado! Abra o arquivo para adicionar ao Google Calendar.");
      }
    } else {
      const link = document.createElement('a');
      link.href = url;
      link.download = 'desperta.ics';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        window.URL.revokeObjectURL(url);
      }, 100);

      showToast("Evento salvo! Abra o arquivo para adicionar ao seu calendário.");
    }
  };

  return (
    <div className="relative w-full bg-[#fffbf6]">
      <header className="relative w-full">
        <img
          className="w-full h-auto object-cover md:hidden"
          alt="Desperta - Um Encontro com Deus ao Nascer do Sol"
          src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/bannermobile.jpg"
        />
        <img
          className="hidden md:block w-full h-auto object-cover"
          alt="Desperta - Um Encontro com Deus ao Nascer do Sol"
          src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/bannerdesktop2.png"
        />
      </header>

      <section className="relative py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:hidden">
            <div className="[font-family:'Raleway',Helvetica] font-medium text-[#6d4c30] mb-1">
              <span className="text-4xl">22</span>
              <span className="text-3xl"> NOV . 4h30</span>
            </div>
            <div className="[font-family:'Raleway',Helvetica] font-medium text-[#6d4c30] text-2xl">
              Praia do Campeche
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
            <div className="space-y-3 md:space-y-4 [font-family:'Raleway',Helvetica] text-[#513b2d] text-sm md:text-xl leading-relaxed text-left mb-8 md:mb-0 px-2">
              <div className="hidden md:block text-left mb-6">
                <div className="[font-family:'Raleway',Helvetica] font-medium text-[#6d4c30] mb-2">
                  <span className="text-6xl">Bem-vindo(a)</span>
                  <span className="text-5xl">ao Desperta</span>
                </div>
                <div className="[font-family:'Raleway',Helvetica] font-medium text-[#6d4c30] text-5xl">
                  Praia do Campeche
                </div>
              </div>
              <p>
                O <span className="font-bold italic">Desperta</span> é um convite para
                ir além da rotina — um momento de pausa, silêncio e reconexão
                com o divino.
              </p>
              <p>
                Enquanto o sol nasce e o mar reflete a luz do dia, somos
                convidados a <span className="font-bold italic">olhar pra dentro</span>
                , respirar fundo e abrir espaço para ouvir a voz de Deus.
              </p>
              <p>
                É um tempo de louvor, escuta e reflexão, cercado pela natureza,
                onde o amanhecer se torna um lembrete:{" "}
                <span className="font-bold italic">
                  existe algo novo para a sua vida.
                </span>
              </p>
              <p>
                Mais do que um evento, o Desperta é{" "}
                <span className="font-bold">uma experiência</span>{" "}
                <span className="font-bold italic">
                  espiritual coletiva — um despertar da alma para o amor, para a
                  esperança e a fé que transformam.
                </span>
              </p>
              <p>
                Não é preciso ter religião, apenas traga{" "}
                <span className="font-bold">um coração</span>{" "}
                <span className="font-bold italic">
                  disposto a buscar algo maior e venha viver o nascer do sol em
                  família.
                </span>
              </p>
            </div>

            <div className="relative max-w-sm mx-auto md:max-w-none px-4 md:px-0">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg">
                <video
                  className="w-full aspect-[9/16] max-h-[600px] object-cover"
                  controls
                  preload="none"
                  poster="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/lazyload.png"
                >
                  <source src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/Despertaold.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="relative py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="[font-family:'Raleway',Helvetica] font-normal text-[#6d4c30] text-xl md:text-3xl text-center mb-6 md:mb-8">
            Depoimento de quem participou
          </h2>

          <div className="md:hidden relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
            <button
              onClick={() => scrollTestimonials('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-8 h-8 text-white drop-shadow-lg" strokeWidth={3} />
            </button>
            <button
              onClick={() => scrollTestimonials('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-8 h-8 text-white drop-shadow-lg" strokeWidth={3} />
            </button>
            <div ref={testimonialScrollRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              <div className="flex-shrink-0 w-full snap-center">
                <img
                  className="w-full h-auto object-contain"
                  alt="Testimonial 1"
                  src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo1.jpg"
                />
              </div>
              <div className="flex-shrink-0 w-full snap-center">
                <img
                  className="w-full h-auto object-contain"
                  alt="Testimonial 2"
                  src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo2.jpg"
                />
              </div>
              <div className="flex-shrink-0 w-full snap-center">
                <img
                  className="w-full h-auto object-contain"
                  alt="Testimonial 3"
                  src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo3.jpg"
                />
              </div>
              <div className="flex-shrink-0 w-full snap-center">
                <img
                  className="w-full h-auto object-contain"
                  alt="Testimonial 4"
                  src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo4.jpg"
                />
              </div>
              <div className="flex-shrink-0 w-full snap-center">
                <img
                  className="w-full h-auto object-contain"
                  alt="Testimonial 5"
                  src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo5.jpg"
                />
              </div>
              <div className="flex-shrink-0 w-full snap-center">
                <img
                  className="w-full h-auto object-contain"
                  alt="Testimonial 6"
                  src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo6.jpg"
                />
              </div>
              <div className="flex-shrink-0 w-full snap-center">
                <img
                  className="w-full h-auto object-contain"
                  alt="Testimonial 7"
                  src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo7.jpg"
                />
              </div>
              <div className="flex-shrink-0 w-full snap-center">
                <img
                  className="w-full h-auto object-contain"
                  alt="Testimonial 8"
                  src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo8.jpg"
                />
              </div>
              <div className="flex-shrink-0 w-full snap-center">
                <img
                  className="w-full h-auto object-contain"
                  alt="Testimonial 9"
                  src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo9.jpg"
                />
              </div>
              <div className="flex-shrink-0 w-full snap-center">
                <img
                  className="w-full h-auto object-contain"
                  alt="Testimonial 10"
                  src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo10.jpg"
                />
              </div>
              <div className="flex-shrink-0 w-full snap-center">
                <img
                  className="w-full h-auto object-contain"
                  alt="Testimonial 11"
                  src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo11.jpg"
                />
              </div>
              <div className="flex-shrink-0 w-full snap-center">
                <img
                  className="w-full h-auto object-contain"
                  alt="Testimonial 12"
                  src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo12.jpg"
                />
              </div>
            </div>
          </div>

          <div className="hidden md:block relative max-w-6xl mx-auto">
            <button
              onClick={() => scrollDesktopTestimonials('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 transition-all"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-8 h-8 text-white drop-shadow-lg" strokeWidth={3} />
            </button>
            <button
              onClick={() => scrollDesktopTestimonials('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 transition-all"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-8 h-8 text-white drop-shadow-lg" strokeWidth={3} />
            </button>
            <div ref={desktopTestimonialScrollRef} className="overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-[calc(33.333%-1rem)] snap-start rounded-lg overflow-hidden shadow-lg">
                  <img
                    className="w-full h-auto object-contain"
                    alt="Testimonial 1"
                    src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo1.jpg"
                  />
                </div>
                <div className="flex-shrink-0 w-[calc(33.333%-1rem)] snap-start rounded-lg overflow-hidden shadow-lg">
                  <img
                    className="w-full h-auto object-contain"
                    alt="Testimonial 2"
                    src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo2.jpg"
                  />
                </div>
                <div className="flex-shrink-0 w-[calc(33.333%-1rem)] snap-start rounded-lg overflow-hidden shadow-lg">
                  <img
                    className="w-full h-auto object-contain"
                    alt="Testimonial 3"
                    src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo3.jpg"
                  />
                </div>
                <div className="flex-shrink-0 w-[calc(33.333%-1rem)] snap-start rounded-lg overflow-hidden shadow-lg">
                  <img
                    className="w-full h-auto object-contain"
                    alt="Testimonial 4"
                    src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo4.jpg"
                  />
                </div>
                <div className="flex-shrink-0 w-[calc(33.333%-1rem)] snap-start rounded-lg overflow-hidden shadow-lg">
                  <img
                    className="w-full h-auto object-contain"
                    alt="Testimonial 5"
                    src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo5.jpg"
                  />
                </div>
                <div className="flex-shrink-0 w-[calc(33.333%-1rem)] snap-start rounded-lg overflow-hidden shadow-lg">
                  <img
                    className="w-full h-auto object-contain"
                    alt="Testimonial 6"
                    src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo6.jpg"
                  />
                </div>
                <div className="flex-shrink-0 w-[calc(33.333%-1rem)] snap-start rounded-lg overflow-hidden shadow-lg">
                  <img
                    className="w-full h-auto object-contain"
                    alt="Testimonial 7"
                    src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo7.jpg"
                  />
                </div>
                <div className="flex-shrink-0 w-[calc(33.333%-1rem)] snap-start rounded-lg overflow-hidden shadow-lg">
                  <img
                    className="w-full h-auto object-contain"
                    alt="Testimonial 8"
                    src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo8.jpg"
                  />
                </div>
                <div className="flex-shrink-0 w-[calc(33.333%-1rem)] snap-start rounded-lg overflow-hidden shadow-lg">
                  <img
                    className="w-full h-auto object-contain"
                    alt="Testimonial 9"
                    src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo9.jpg"
                  />
                </div>
                <div className="flex-shrink-0 w-[calc(33.333%-1rem)] snap-start rounded-lg overflow-hidden shadow-lg">
                  <img
                    className="w-full h-auto object-contain"
                    alt="Testimonial 10"
                    src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo10.jpg"
                  />
                </div>
                <div className="flex-shrink-0 w-[calc(33.333%-1rem)] snap-start rounded-lg overflow-hidden shadow-lg">
                  <img
                    className="w-full h-auto object-contain"
                    alt="Testimonial 11"
                    src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo11.jpg"
                  />
                </div>
                <div className="flex-shrink-0 w-[calc(33.333%-1rem)] snap-start rounded-lg overflow-hidden shadow-lg">
                  <img
                    className="w-full h-auto object-contain"
                    alt="Testimonial 12"
                    src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/depo12.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-8 md:py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="[font-family:'Raleway',Helvetica] font-normal text-[#6d4c30] text-xl md:text-3xl text-center mb-6 md:mb-8">
            Edições anteriores
          </h2>
          <div className="md:hidden flex flex-col">
            {galleryImages.map((image, index) => (
              <div key={index} className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
                <img
                  className="w-full h-auto object-cover"
                  alt={image.alt}
                  src={image.src}
                />
              </div>
            ))}
          </div>
          <div className="hidden md:flex md:flex-col">
            {desktopGalleryImages.map((image, index) => (
              <div key={index} className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
                <img
                  className="w-full h-auto object-cover"
                  alt={image.alt}
                  src={image.src}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-8 md:py-12 px-4 bg-[#e8dcc8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="[font-family:'Raleway',Helvetica] font-normal text-[#6d4c30] text-base md:text-4xl mb-4 px-4">
              Av. Campeche, 720<br />
              (deck de acesso a praia do Vizu)
            </h2>
            <div className="md:grid md:grid-cols-2 md:gap-6 md:items-start">
              <img
                className="w-full h-auto rounded-lg mb-4 md:mb-0"
                alt="Location map illustration"
                src="/map.jpg"
              />
              <div className="w-full h-[300px] md:h-full md:min-h-[450px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.4!2d-48.482173!3d-27.681969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQwJzU1LjEiUyA0OMKwMjgnNTUuOCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - Praia do Campeche"
                />
              </div>
            </div>
            <div className="max-w-sm mx-auto mt-6">
              <a
                href="http://evt.to/ehedauuhw"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#6d4c30] hover:bg-[#8e5013] text-white py-3 px-6 rounded-lg transition-colors [font-family:'Raleway',Helvetica] font-medium text-base md:text-lg text-center"
              >
                📅 Salvar na agenda
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="[font-family:'Raleway',Helvetica] font-normal text-[#6d4c30] text-2xl md:text-4xl text-center mb-6 md:mb-8">
            Semeie no Desperta
          </h2>

          <div className="max-w-4xl mx-auto mb-8 px-4">
            <div className="bg-[#f5ddb8] rounded-lg p-4 md:p-6 shadow-lg">
              <div className="flex justify-between items-center mb-3">
                <div className="text-left">
                  <p className="[font-family:'Raleway',Helvetica] text-[#513b2d] text-xs md:text-sm mb-1">Arrecadado</p>
                  <p className="[font-family:'Raleway',Helvetica] font-bold text-[#6d4c30] text-lg md:text-2xl">R$ 21.488,57</p>
                </div>
                <div className="text-right">
                  <p className="[font-family:'Raleway',Helvetica] text-[#513b2d] text-xs md:text-sm mb-1">Meta até 31/12</p>
                  <p className="[font-family:'Raleway',Helvetica] font-bold text-[#6d4c30] text-lg md:text-2xl">R$ 42.000,00</p>
                </div>
              </div>
              <div className="relative w-full h-4 bg-white rounded-full overflow-hidden shadow-inner">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#8e5013] to-[#6d4c30] rounded-full transition-all duration-1000 ease-out"
                  style={{ width: '51.16%' }}
                >
                  <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="[font-family:'Raleway',Helvetica] text-[#8e5013] text-xs md:text-sm font-medium">
                  51% alcançado - Faltam R$ 20.511,43 para a meta
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-8 md:mb-12 space-y-4 [font-family:'Raleway',Helvetica] text-[#513b2d] text-sm md:text-2xl text-left px-4">
            <p>O Desperta acontece de forma gratuita e segue crescendo graças à contribuição voluntária de quem faz parte desse movimento.</p>
            <p>Sua contribuição ajuda a proporcionar a melhor experiência possível a todos que participam.</p>
            <p>Escolha um dos valores abaixo e contribua com alegria.</p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-4 md:hidden">
            {donationTiers.map((tier, index) => (
              <div key={index} className="relative">
                {(tier.amount === "100" || tier.amount === "200") && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 bg-[#8e5013] text-white px-3 py-1 rounded-full text-xs [font-family:'Raleway',Helvetica] font-medium whitespace-nowrap shadow-lg">
                    🎁 {tier.amount === "100" ? "1 camiseta grátis" : "2 camisetas grátis"}
                  </div>
                )}
                <Card
                  className="border-none bg-[#f5ddb8] hover:bg-[#f5d4a5] transition-colors cursor-pointer shadow-lg"
                  onClick={() => handleDonationClick(tier.pixCode, tier.amount)}
                >
                  <CardContent className="p-4 text-center">
                    <img
                      className="w-12 h-auto mb-2 mx-auto"
                      alt={`${tier.name} icon`}
                      src={tier.icon}
                    />
                    <h3 className="[font-family:'Raleway',Helvetica] font-medium text-[#8e5013] text-lg mb-1">
                      {tier.name}
                    </h3>
                    <div className="[font-family:'Raleway',Helvetica] font-medium text-[#8e5013] mb-2">
                      <span className="text-base">R$ </span>
                      <span className="text-2xl">{tier.amount}</span>
                    </div>
                  </CardContent>
                </Card>
                <p className="[font-family:'Raleway',Helvetica] font-normal italic text-[#8e5013] text-xs text-center mt-2 px-2">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>

          <div className="hidden md:grid md:grid-cols-5 md:gap-8 max-w-7xl mx-auto mb-8">
            {donationTiers.map((tier, index) => (
              <div key={index} className="relative">
                {(tier.amount === "100" || tier.amount === "200") && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-[#8e5013] text-white px-4 py-2 rounded-full text-sm [font-family:'Raleway',Helvetica] font-medium whitespace-nowrap shadow-lg">
                    🎁 {tier.amount === "100" ? "1 camiseta grátis" : "2 camisetas grátis"}
                  </div>
                )}
                <Card
                  className="border-none bg-[#f5ddb8] hover:bg-[#f5d4a5] transition-colors cursor-pointer shadow-lg"
                  onClick={() => handleDonationClick(tier.pixCode, tier.amount)}
                >
                  <CardContent className="p-6 text-center">
                    <img
                      className="w-16 h-auto mb-4 mx-auto"
                      alt={`${tier.name} icon`}
                      src={tier.icon}
                    />
                    <h3 className="[font-family:'Raleway',Helvetica] font-medium text-[#8e5013] text-3xl mb-2">
                      {tier.name}
                    </h3>
                    <div className="[font-family:'Raleway',Helvetica] font-medium text-[#8e5013] mb-4">
                      <span className="text-2xl">R$ </span>
                      <span className="text-5xl">{tier.amount}</span>
                    </div>
                  </CardContent>
                </Card>
                <p className="[font-family:'Raleway',Helvetica] font-normal italic text-[#8e5013] text-base text-center mt-3 px-2">
                  {tier.description}
                </p>
              </div>
            ))}
            <div>
              <Card className="border-none bg-[#f5ddb8] hover:bg-[#f5d4a5] transition-colors cursor-pointer shadow-lg" onClick={handleCustomAmountClick}>
                <CardContent className="p-6 text-center">
                  <img
                    className="w-16 h-auto mb-4 mx-auto"
                    alt="Custom amount icon"
                    src="/vector-26.svg"
                  />
                  <h3 className="[font-family:'Raleway',Helvetica] font-medium text-[#8e5013] text-3xl">
                    Escolher outro valor
                  </h3>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto md:hidden">
            <Card className="border-none bg-[#f5ddb8] hover:bg-[#f5d4a5] transition-colors cursor-pointer shadow-lg" onClick={handleCustomAmountClick}>
              <CardContent className="p-4 text-center">
                <img
                  className="w-12 h-auto mb-2 mx-auto"
                  alt="Custom amount icon"
                  src="/vector-26.svg"
                />
                <h3 className="[font-family:'Raleway',Helvetica] font-medium text-[#8e5013] text-lg">
                  Escolher outro valor
                </h3>
              </CardContent>
            </Card>

            <div className="text-center flex flex-col items-center justify-center h-full">
              <div className="[font-family:'Raleway',Helvetica] font-normal italic text-[#513b2d] text-sm space-y-1 mb-3">
                <p>Cada semente conta.</p>
                <p>Obrigado por fazer parte</p>
                <p>dessa jornada!</p>
              </div>
              <div className="flex gap-2">
                <span className="text-2xl">💛</span>
                <span className="text-2xl">💛</span>
                <span className="text-2xl">💛</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block text-center mt-8">
            <div className="[font-family:'Raleway',Helvetica] font-normal italic text-[#513b2d] text-xl space-y-1 mb-3">
              <p>Cada semente conta.</p>
              <p>Obrigado por fazer parte dessa jornada!</p>
            </div>
            <div className="flex gap-2 justify-center">
              <span className="text-3xl">💛</span>
              <span className="text-3xl">💛</span>
              <span className="text-3xl">💛</span>
            </div>
          </div>

          {showTshirtGallery && (
            <div className="max-w-6xl mx-auto mt-12 px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center mb-6">
                <h3 className="[font-family:'Raleway',Helvetica] font-medium text-[#6d4c30] text-2xl md:text-4xl mb-2">
                  🎁 Suas camisetas te esperam!
                </h3>
                <p className="[font-family:'Raleway',Helvetica] text-[#8e5013] text-sm md:text-lg">
                  Clique nas imagens para ver mais modelos disponíveis
                </p>
              </div>

              <div className="md:hidden relative">
                <div className="relative overflow-hidden rounded-lg">
                  <a
                    href="https://www.flickr.com/photos/201201433@N06/with/54958657950"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src={tshirtImages[currentTshirtSlide]}
                      alt={`Camiseta DESPERTA - Modelo ${currentTshirtSlide + 1}`}
                      className="w-full h-auto object-cover shadow-lg"
                    />
                  </a>
                </div>
                <button
                  onClick={() => scrollTshirts('left')}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#8e5013] text-white p-3 rounded-full shadow-lg hover:bg-[#6d4c30] transition-colors"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollTshirts('right')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#8e5013] text-white p-3 rounded-full shadow-lg hover:bg-[#6d4c30] transition-colors"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div className="flex justify-center gap-2 mt-4">
                  {tshirtImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTshirtSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentTshirtSlide ? 'bg-[#8e5013] w-6' : 'bg-[#f5ddb8]'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="hidden md:grid md:grid-cols-3 gap-6">
                {tshirtImages.map((image, index) => (
                  <a
                    key={index}
                    href="https://www.flickr.com/photos/201201433@N06/with/54958657950"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <img
                      src={image}
                      alt={`Camiseta DESPERTA - Modelo ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <footer className="relative py-0">
        <div className="w-full">
          <img
            className="w-full h-auto md:hidden"
            alt="SurfHouse Comunidade Cristã - ©2025 Todos os direitos reservados"
            src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/bottom_mobile.png"
          />
          <img
            className="hidden md:block w-full h-auto"
            alt="SurfHouse Comunidade Cristã - ©2025 Todos os direitos reservados"
            src="https://mistyrose-partridge-658178.hostingersite.com/wp-content/uploads/2025/11/bottom_desktop.png"
          />
        </div>
      </footer>
    </div>
  );
};
