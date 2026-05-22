"use client";

import React, { useState } from "react";

export default function ContaUsuario() {
  const [email, setEmail] = useState("ra140535@uem.br");
  const [fullName, setFullName] = useState("Letícia Akemi Nakahati Vieira");
  const [newPassword, setNewPassword] = useState("");

  return (
    <div className="min-h-screen bg-[#cfe2f3] flex flex-col font-sans text-gray-800">
      
      {/* HEADER / BARRA DE NAVEGAÇÃO */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2 font-bold text-lg text-gray-900">
          <span>📋</span>
          <span>AAD - Agenda Acadêmica digital</span>
        </div>
        
        <nav className="flex items-center gap-6 font-medium text-sm text-gray-700">
          <button className="flex items-center gap-1 hover:text-blue-600 transition">
            <span>📅</span> Eventos
          </button>
          <button className="flex items-center gap-1 hover:text-blue-600 transition">
            <span>🗓️</span> Calendário
          </button>
          <button className="flex items-center gap-1 hover:text-blue-600 transition">
            <span>📝</span> Minhas inscrições
          </button>
          
          {/* Perfil no Header */}
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200">
            <img 
              src="/marinasena.jpg" 
              alt="Foto de Leticia Akemi" 
              className="w-5 h-5 rounded-full object-cover"
              onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/20" }}
            />
            <span className="text-xs font-semibold text-gray-900">Leticia Akemi</span>
          </div>
        </nav>
      </header>

      {/* CONTEÚDO PRINCIPAL (CARD CENTRALIZADO) */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-md border border-gray-100 relative">
          
          {/* Botão Sair */}
          <button className="absolute top-6 right-6 flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-red-600 transition">
            <span>Sair</span>
            <span>🚪</span>
          </button>

          {/* Cabeçalho do Card */}
          <div className="flex items-center gap-4 border-b border-gray-100 pb-6 mb-6">
            <img
              className="w-16 h-16 rounded-full object-cover shadow-inner border border-gray-200"
              alt="Foto de perfil de Leticia Akemi"
              src="/marinasena.jpg"
              onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/64" }}
            />
            <div>
              <h2 className="text-xl font-bold text-gray-900">Informações da conta</h2>
              <p className="text-sm text-gray-500 font-mono">{email}</p>
            </div>
          </div>

          {/* FORMULÁRIO */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            
            {/* Campo Email */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-700 pl-1">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-full border border-gray-300 text-gray-600 bg-gray-50 focus:outline-none focus:border-blue-400 focus:bg-white transition text-sm"
              />
            </div>

            {/* Campo Nome Completo */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-700 pl-1">Nome completo:</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 rounded-full border border-gray-300 text-gray-800 focus:outline-none focus:border-blue-400 transition text-sm"
              />
            </div>

            {/* Seção Alterar Senha */}
            <div className="pt-2">
              <h3 className="text-base font-bold text-gray-900 mb-3 pl-1">Alterar senha</h3>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-600 pl-1">Nova senha:</label>
                <input
                  type="password"
                  value={newPassword}
                  placeholder="••••••••"
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-full border border-gray-300 text-gray-800 focus:outline-none focus:border-blue-400 transition text-sm"
                />
              </div>
            </div>

            {/* Botão de Ação */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-[#9fc5f8] hover:bg-blue-400 text-gray-900 font-medium px-8 py-2 rounded-full shadow-sm hover:shadow transition text-sm"
              >
                Alterar
              </button>
            </div>

          </form>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-between text-xs text-gray-500 font-medium">
        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-bold text-sm">📋 EventosUniversitarios</span>
          <span>© Todos os direitos reservados</span>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="hover:text-blue-600 transition">Política de privacidade</button>
          <button className="hover:text-blue-600 transition">Entre em contato</button>
        </div>

        {/* Ícones Sociais Simples */}
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <span className="cursor-pointer hover:text-blue-600">📞</span>
          <span className="cursor-pointer hover:text-pink-600">📸</span>
          <span className="cursor-pointer hover:text-blue-800">💼</span>
          <span className="cursor-pointer hover:text-blue-500">👤</span>
        </div>
      </footer>

    </div>
  );
}