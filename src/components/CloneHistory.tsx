import React from 'react';

export const CloneHistory: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white px-4 sm:px-6 border-t border-[#F0F0F0]">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl sm:text-4xl font-black text-[#0F0F0F] text-center font-sora">
          NOSSA HISTÓRIA
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Image */}
          <div className="md:col-span-5 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-md border-4 border-[#FFECEC] max-w-sm">
              <img
                src="/images/bio_jessica.jpg"
                alt="Jéssica Marcon de Oliveira, confeiteira e criadora do método Brownie Lucrativo"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Story Text */}
          <div className="md:col-span-7 space-y-4 text-xs sm:text-sm md:text-base text-[#333] leading-relaxed">
            <p>
              Desde que eu, <strong>Jéssica Marcon de Oliveira</strong>, me recordo como pessoa, passei todos os Natais com uma receita de família muito, mas muito maravilhosa de brownie – sabe aquela que todo mundo se briga por querer comer a forma inteira?
            </p>
            <p>
              Além disso, desde jovem já tinha o espírito empreendedor: minhas brincadeiras eram sobre vender itens, pedras, planejar uma &ldquo;lojinha&rdquo;, até jogos do computador minha principal satisfação era planejar e gerenciar.
            </p>
            <p>
              Até que um dia, no meio da faculdade de Administração na Universidade do Sul de Santa Catarina, levei uma fornada que havia feito para os meus colegas provarem. Em um pote mesmo, sem nada especial. Adivinhem? <strong>Sucesso absoluto!</strong>
            </p>
            <p>
              Mesmo assim (perfeccionista que sou), tentei dezenas de outras receitas para tentar achar alguma ainda melhor (por mais que essa já fosse perfeita). Foram muitos ingredientes perdidos, muito choro (afinal, sou canceriana, quem sabe, sabe...) até que eu resolvi pegar a mesma receita de família que tinha, e com estudos sobre gastronomia, lapidar em cima dela mesma.
            </p>
            <p className="font-semibold text-[#111]">
              Não houveram dúvidas: a busca pela receita perfeita havia encerrado. Nosso método nasceu dessa paixão e hoje nosso maior orgulho é ensinar milhares de pessoas a conquistarem sua independência financeira com o doce mais amado do Brasil!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
