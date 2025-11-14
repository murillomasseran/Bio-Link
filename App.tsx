
import React from 'react';

// New links data
const links = [
  {
    image: 'https://www.s1nc.com.br/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fevarnldo%2Fproduction%2F0535bd1a6b76320c789514223b1c9c0d9551e57e-588x492.webp&w=1200&q=75&dpl=dpl_639CekX3iYzgJFGhLvFKzPY23YBk',
    title: 'Agendar Sessão de Diagnóstico Financeiro',
    description: 'A Consultoria Financeira é um serviço exclusivo com agenda limitada. Faremos o diagnóstico completo dos seus Pilares Financeiros e traçaremos seu plano de ação estratégico. Clique para consultar a disponibilidade.',
    url: 'https://wa.me/5519992311642',
  },
  {
    image: 'https://img.freepik.com/free-photo/handshake-business-men-concept_53876-31214.jpg?semt=ais_hybrid&w=740&q=80',
    title: 'E-book: Pró-Labore não é Lucro',
    description: 'A saúde da sua empresa começa na sua. A confusão entre contas pessoais e empresariais (CPF/CNPJ) é o primeiro passo para o caos financeiro. Este guia prático, baseado no Pilar Organização, mostra o método para definir seu pró-labore com disciplina.',
    url: '#',
  },
  {
    image: 'https://www.s1nc.com.br/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fevarnldo%2Fproduction%2F0b3709ad48c19d2f79bd017255b1c560eb376163-588x492.webp&w=1200&q=75&dpl=dpl_639CekX3iYzgJFGhLvFKzPY23YBk',
    title: 'App de Gestão Financeira',
    description: 'A disciplina da Organização na palma da sua mão. Centralize seu fluxo de caixa, despesas e visualize seus investimentos com clareza total. Comece a organizar suas finanças hoje.',
    url: 'https://app.s1nc.com.br/afiliado/MJJSCL/murillo-augusto-dahrouge-masseran',
  },
  {
    image: 'https://placehold.co/150x150/fbb6ce/b83280?text=E-book',
    title: 'E-book (Pago): O Alicerce da Riqueza',
    description: 'Muitos acreditam que o próximo nível financeiro vem de um \'investimento secreto\'. A verdade? Ele vem da disciplina diária. Este é o manual prático do Pilar Organização. Você aprenderá o método que uso para criar fluxo de caixa, diagnosticar ativos e passivos e construir a base sólida para o Acúmulo e Expansão',
    url: '#',
  },
  {
    image: 'https://classic.exame.com/wp-content/uploads/2021/04/IMG_3155site.jpg',
    title: 'Quero trabalhar no Mercado Financeiro',
    description: 'Se você busca uma carreira com propósito e disciplina (baseada na minha experiência militar) e quer aprender a aplicar a Metodologia dos 4 Pilares, esta pode ser sua oportunidade. Clique para conhecer o processo seletivo.',
    url: '#',
  },
];

type SocialLinkProps = {
  href: string;
  // FIX: Made children optional to resolve TypeScript errors where it was reported as missing.
  children?: React.ReactNode;
  ariaLabel: string;
};

// Updated SocialLink with Glassmorphism styles
const SocialLink = ({ href, children, ariaLabel }: SocialLinkProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className="w-14 h-14 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white shadow-lg border border-white/30 hover:bg-white/40 hover:scale-110 transition-all duration-300">
    {children}
  </a>
);

const WhatsAppIconSvg = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fillRule="evenodd"/>
    </svg>
);


const App: React.FC = () => {
    return (
        <div className="min-h-screen">
            <main className="relative z-10 pt-16 sm:pt-24 pb-12 px-4">
                <div className="max-w-2xl mx-auto">
                    {/* Profile Section */}
                    <div className="text-center mb-12">
                        <img 
                            src="https://media.licdn.com/dms/image/v2/D5603AQF8p1cWPaJU_A/profile-displayphoto-shrink_200_200/B56ZYzph_EH0AY-/0/1744623248950?e=2147483647&v=beta&t=RjTb8B4VVEcMhB1BbLqf5ZCqSo9UTg8QUvWyw53CCbc" 
                            alt="Murillo Masseran" 
                            className="w-36 h-36 rounded-full mx-auto border-4 border-white/50 shadow-lg"
                        />
                        <h1 className="mt-5 text-4xl font-bold text-white" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
                            Murillo Masseran
                        </h1>
                        <p className="mt-2 text-lg text-gray-200">
                            Te ajudo a construir patrimônio com disciplina e método.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="space-y-6">
                        {links.map((link, index) => (
                            <a 
                                key={index} 
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-stretch overflow-hidden bg-white/20 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 hover:shadow-2xl hover:bg-white/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 h-44 sm:h-64"
                            >
                                <div className="w-1/3 flex-shrink-0">
                                    <img src={link.image} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-2/3 p-4 sm:p-5 flex flex-col justify-center">
                                    <h3 className="font-bold text-white text-lg sm:text-xl leading-tight">
                                      {link.title}
                                    </h3>
                                    <p className="text-sm text-gray-200 mt-2 hidden sm:block">{link.description}</p>

                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Socials Section */}
                    <div className="mt-12 flex justify-center space-x-4 sm:space-x-6">
                        <SocialLink href="https://www.linkedin.com/in/murillo-masseran/" ariaLabel="LinkedIn">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                        </SocialLink>
                        <SocialLink href="https://www.instagram.com/murillo_masseran/" ariaLabel="Instagram">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
                        </SocialLink>
                        <SocialLink href="https://www.facebook.com/MurilloADMasseran" ariaLabel="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg>
                        </SocialLink>
                         <SocialLink href="https://wa.me/5519992311642" ariaLabel="WhatsApp">
                           <WhatsAppIconSvg className="h-8 w-8" fill="currentColor" />
                        </SocialLink>
                    </div>

                    {/* Footer */}
                    <div className="mt-12 text-center text-gray-200">
                        <div className="w-full h-[1px] bg-white/20 mb-6"></div>
                        <p>&copy; 2025 Murillo Masseran - Financial Planning</p>
                    </div>
                </div>
            </main>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/5519992311642"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact on WhatsApp"
                className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#4dc247] text-white shadow-[2px_2px_6px_rgba(0,0,0,0.4)] transition-shadow duration-300 hover:shadow-[2px_2px_11px_rgba(0,0,0,0.7)]"
            >
                <WhatsAppIconSvg className="h-10 w-10" fill="currentColor" />
            </a>
        </div>
    );
};

export default App;