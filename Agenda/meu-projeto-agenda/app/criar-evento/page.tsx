"use client";

import { useState } from "react";

export default function CriarEvento() {
  return (
    <main className="min-h-screen bg-[#dce8fa] font-sans pb-10">
      {/* NAVBAR */}
      <nav className="bg-white border-b border-gray-300 flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          {/* Ícone de Caderno Fake */}
          <div className="w-6 h-8 border-2 border-black rounded-sm flex flex-col justify-evenly p-1">
            <div className="w-full h-[2px] bg-black"></div>
            <div className="w-full h-[2px] bg-black"></div>
            <div className="w-full h-[2px] bg-black"></div>
          </div>
          <h1 className="text-xl font-medium text-black">AAD - Agenda Acadêmica digital</h1>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium">
          <button className="flex items-center gap-2 text-gray-700 hover:text-black">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            Eventos
          </button>
          <button className="flex items-center gap-2 text-gray-700 hover:text-black">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            Calendário
          </button>
          <button className="flex items-center gap-2 text-gray-700 hover:text-black">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            Meus eventos
          </button>
          <button className="flex items-center gap-2 bg-[#b3d4ff] text-[#05479a] px-4 py-2 rounded-full font-semibold border border-[#90c1ff]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            Criar evento
          </button>
          <div className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1 bg-white">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">EX</div>
            <span>EXATASUEM</span>
          </div>
        </div>
      </nav>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="max-w-5xl mx-auto mt-8 px-6">
        {/* Cabeçalho da Página */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-start gap-4">
            <button className="mt-2 text-gray-800 hover:text-black">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </button>
            <div>
              <h2 className="text-3xl font-normal text-gray-900 mb-1">Criar um evento</h2>
              <p className="text-gray-600">Adicione as principais informações sobre seu novo evento.</p>
            </div>
          </div>
          <button className="bg-[#1f2022] hover:bg-black text-white px-6 py-3 rounded-md font-medium text-sm">
            Confirmar criação de evento
          </button>
        </div>

        {/* Formulário */}
        <form className="space-y-6">
          {/* Nome */}
          <div className="flex items-start gap-3">
            <div className="mt-10 text-gray-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            </div>
            <div className="flex-1">
              <label className="block text-gray-900 font-medium mb-2">Nome: <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Nome do evento" className="w-full border border-gray-400 rounded-md p-3 outline-none focus:border-blue-500 shadow-sm" />
            </div>
          </div>

          {/* Linha: Data/Hora e Departamento */}
          <div className="flex gap-10 pl-9">
            {/* Data e horário */}
            <div className="flex-1 relative">
               <div className="absolute -left-9 top-10 text-gray-500">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
               </div>
               <label className="block text-gray-900 font-medium mb-2">Data e horário: <span className="text-red-500">*</span></label>
               <div className="flex items-center gap-3">
                 <input type="text" placeholder="20/10/2025" className="w-32 border border-gray-400 rounded-md p-3 outline-none focus:border-blue-500 shadow-sm" />
                 <input type="text" placeholder="09:00" className="w-24 border border-gray-400 rounded-md p-3 outline-none focus:border-blue-500 shadow-sm" />
                 <span className="text-gray-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                 </span>
                 <input type="text" placeholder="20/10/2025" className="w-32 border border-gray-400 rounded-md p-3 outline-none focus:border-blue-500 shadow-sm" />
                 <input type="text" placeholder="21:00" className="w-24 border border-gray-400 rounded-md p-3 outline-none focus:border-blue-500 shadow-sm" />
               </div>
            </div>

            {/* Departamento */}
            <div className="flex-1">
              <label className="block text-gray-900 font-medium mb-2">Departamento: <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Nome do departamento" className="w-full max-w-sm border border-gray-400 rounded-md p-3 outline-none focus:border-blue-500 shadow-sm" />
            </div>
          </div>

          {/* Linha: Local e Inscritos */}
          <div className="flex gap-10 pl-9">
            {/* Local */}
            <div className="flex-1 relative">
              <div className="absolute -left-9 top-10 text-gray-500">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
               </div>
              <label className="block text-gray-900 font-medium mb-2">Local: <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Nome do local do evento" className="w-full border border-gray-400 rounded-md p-3 outline-none focus:border-blue-500 shadow-sm mb-2" />
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-400" />
                Online
              </label>
            </div>

            {/* Máximo de inscritos */}
            <div className="flex-1">
              <label className="block text-gray-900 font-medium mb-2">Máximo de inscritos:</label>
              <input type="text" className="w-full border border-gray-400 rounded-md p-3 outline-none focus:border-blue-500 shadow-sm" />
            </div>
          </div>

          {/* Descrição */}
          <div className="flex items-start gap-3">
             <div className="mt-10 text-gray-500">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
             </div>
             <div className="flex-1 relative">
               <div className="flex justify-between items-end mb-2">
                 <label className="block text-gray-900 font-medium">Descrição: <span className="text-red-500">*</span></label>
                 <button type="button" className="bg-[#8fc1ff] hover:bg-blue-400 text-blue-900 px-3 py-1 rounded-md text-sm font-medium flex items-center gap-2">
                   Importar imagem
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                 </button>
               </div>
               <textarea rows={6} placeholder="Adicione uma descrição para seu evento" className="w-full border border-gray-400 rounded-md p-3 outline-none focus:border-blue-500 shadow-sm resize-none"></textarea>
               {/* Barra de rolagem customizada lateral do textarea pra ficar igual ao print */}
               <div className="absolute right-1 top-[2.5rem] bottom-1 w-3 bg-gray-200 rounded-full border border-white">
                 <div className="w-full h-1/3 bg-gray-400 rounded-full"></div>
               </div>
             </div>
          </div>
        </form>
      </div>

      {/* FOOTER FIXO (OPCIONAL) */}
      <footer className="fixed bottom-0 w-full bg-white border-t border-gray-300 py-4 px-6 flex justify-between items-center text-sm text-gray-500 font-medium z-50">
        <div className="flex items-center gap-2 text-black text-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          EventosUniversitarios
        </div>
        <div>© Todos os direitos reservados</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-black">Política de privacidade</a>
          <a href="#" className="hover:text-black">Entre em contato</a>
        </div>
        <div className="flex gap-3 text-black">
          <a href="#" className="hover:text-gray-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></a>
          <a href="#" className="hover:text-gray-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
          <a href="#" className="hover:text-gray-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
          <a href="#" className="hover:text-gray-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
        </div>
      </footer>
    </main>
  );
}