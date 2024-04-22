import React, {useState, useEffect} from 'react'
import { Popover, Steps } from 'antd';
import { v4 as uuidv4 } from 'uuid';

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);
const description = 'You can hover on the dot.';


function FicheDepenseForm(
  {
    dataSource, callback, setDataSource
  }
) {

  const [benef, setBenef] = useState("");
  const [amount, setAmount] = useState("");
  const [numDossier, setNumDossier] = useState("");
  const [conformity, setConformity] = useState("");
  const [methode, setMethode] = useState("");
  const [budgetary, setBudgetary] = useState("");
  const [authorizer, setAuthorizer] = useState("");

  useEffect(()=>{
    console.log(dataSource)
  }, [])
  const [step, setStep] = useState(0);

  const handleClearForm=()=>{
    setBenef("");
    setAmount("");
    setNumDossier("");
    setConformity("");
    setBudgetary("");
    setAuthorizer("");
  }
  const handleInitiateDepense=(evt)=>{
    evt.preventDefault();
    setDataSource([...dataSource, 
      {
      uuid: uuidv4(),
      montant: amount,
      num_dossier: numDossier,
      methode_de_payement: methode,
      conformity: conformity,
      budgetary: budgetary,
      authorizer: authorizer,
      description: description,
      confirmityIsValid: null,
      budgetaryIsValid: null,
      isAuthorized: null
    }]);
    setStep(0);
    // dataSource.push(
    //   {
    //     montant: amount,
    //     num_dossier: numDossier,
    //     conformity: conformity,
    //     budgetary: budgetary,
    //     authorizer: authorizer
    //   }
    // )
    handleClearForm();
    callback();
  }

  return (
    <form>
      { 
        step === 0 ?
        <div className='space-y-3 p-2 border-2 rounded-lg border-gray-200'>
          <input type="text" className='w-full' placeholder='Montant de la dépense*' value={amount} onChange={e=>setAmount(e.target.value)}/>   
          <input type="text" className='w-full' placeholder='Numéro du dossier*' value={numDossier} onChange={e=>setNumDossier(e.target.value)}/>
          <textarea className='w-full' placeholder='Description*'>
          </textarea>
          <div className='flex justify-end items-center'>
            <button className={`btn btn-primary`} onClick={(e)=>{
              e.preventDefault();
              setStep(step+1)
            }}>Suivant</button>
          </div>
        </div>
      :
        step === 1 &&
        <div className='space-y-3 p-2 border-2 rounded-lg border-gray-200'>
          <select name="" id="" className='w-full' value={methode} onChange={e=>setMethode(e.target.value)}>
            <option value="">Méthode de payement</option>
            <option value="Espece">Espece</option>
            <option value="Virement bancaire">Virement bancaire</option>
          </select>
          <select name="" id="" className='w-full' value={conformity} onChange={e=>setConformity(e.target.value)}>
            <option value="">Conformité</option>
            <option value="Emmanuel Aoudou">Emmanuel Aoudou</option>
            <option value="Elombo Bruno">Elombo Bruno</option>
            <option value="Siaka Yvan">Siaka Yvan</option>
          </select>
          <select name="" id="" className='w-full' value={budgetary} onChange={e=>setBudgetary(e.target.value)}>
            <option value="">Budgetaire</option>
            <option value="Emmanuel Aoudou">Emmanuel Aoudou</option>
            <option value="Elombo Bruno">Elombo Bruno</option>
            <option value="Siaka Yvan">Siaka Yvan</option>
          </select>
          <select name="" id="" className='w-full' value={authorizer} onChange={e=>setAuthorizer(e.target.value)}>
            <option value="">Ordonnateur</option>
            <option value="Emmanuel Aoudou">Emmanuel Aoudou</option>
            <option value="Elombo Bruno">Elombo Bruno</option>
            <option value="Siaka Yvan">Siaka Yvan</option>
          </select>
          <div className='flex justify-between items-center'>
            <button type="" className='btn btn-primary' onClick={(e)=>{
                e.preventDefault();
                setStep(step-1);
            }}>Précédent</button>
            <button type="" className='btn btn-primary' onClick={handleInitiateDepense}>Initier la dépense</button>
          </div>
        </div>
    }
    </form>
  )
}

export default FicheDepenseForm