import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

const imageMockup = new URL('../assets/code-mockup.png', import.meta.url).href

export function Subscribe() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email
      }
    });

    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto px-3 lg:px-0 lg:flex-col lg:mt-0">
        <div className="max-w-[640px] lg:flex lg:items-center lg:flex-col lg:bg-logoReact lg:bg-top lg:bg-no-repeat lg:mt-[-20px] lg:pt-16">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight lg:text-[1.865rem] lg:text-center lg:px-9">
            Construa uma <strong className="text-blue-500"> aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong> JS
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed lg:text-[0.875rem] lg:text-center lg:px-11">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded lg:mt-6 lg:w-full lg:max-w-[490px]">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input 
              className="bg-gray-900 rounded px-5 h-14"
              type="text" 
              placeholder="Seu nome completo" 
              onChange={event => setName(event.target.value)}
            />
            <input 
              className="bg-gray-900 rounded px-5 h-14"
              type="email" 
              placeholder="Digite seu e-mail" 
              onChange={event => setEmail(event.target.value)}
            />

            <button 
              type="submit" 
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src={imageMockup} className="mt-10" />
    </div>
  )
}