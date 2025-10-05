// src/components/ReportForm.jsx
import React, { useState } from 'react';

function ReportForm() {
  const [formData, setFormData] = useState({
    tipoProblema: '',
    descricao: '',
    impacto: '',
    passoSol: '',
    anonimo: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Relatório enviado:', formData);
    // Aqui você'd enviar para o backend (ex.: API)
    setFormData({
      tipoProblema: '',
      descricao: '',
      impacto: '',
      passoSol: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center text-indigo-700">Reclame com Amor</h1>
        <p className="text-center text-gray-600 mb-6">Relate problemas na sua igreja com amor e respeito</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="tipoProblema" className="block text-sm font-medium text-gray-700">Tipo de problema</label>
            <select 
              id="tipoProblema" 
              value={formData.tipoProblema} 
              onChange={(e) => setFormData({...formData, tipoProblema: e.target.value})}
              className="w-full p-2 border rounded bg-gray-100"
            >
              <option value="">Selecione...</option>
              <option value="financeiro">Problemas financeiros</option>
              <option value="pastoral">Falta de cuidado pastoral</option>
              <option value="comunidade">Conflitos na comunidade</option>
            </select>
          </div>

          <div>
            <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">Descrição</label>
            <textarea 
              id="descricao" 
              value={formData.descricao} 
              onChange={(e) => setFormData({...formData, descricao: e.target.value})}
              rows="4"
              className="w-full p-2 border rounded bg-gray-100"
              placeholder="O que está acontecendo?"
            ></textarea>
          </div>

          <div>
            <label htmlFor="impacto" className="block text-sm font-medium text-gray-700">Impacto na comunidade</label>
            <textarea 
              id="impacto" 
              value={formData.impacto} 
              onChange={(e) => setFormData({...formData, impacto: e.target.value})}
              rows="3"
              className="w-full p-2 border rounded bg-gray-100"
              placeholder="Como isso afeta as pessoas?"
            ></textarea>
          </div>

          <div>
            <label htmlFor="passoSol" className="block text-sm font-medium text-gray-700">Passo para resolver</label>
            <textarea 
              id="passoSol" 
              value={formData.passoSol} 
              onChange={(e) => setFormData({...formData, passoSol: e.target.value})}
              rows="2"
              className="w-full p-2 border rounded bg-gray-100"
              placeholder="Qual é um passo para resolver?"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-indigo-600 text-white font-medium py-2 rounded hover:bg-indigo-700"
          >
            Enviar com amor
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReportForm;
