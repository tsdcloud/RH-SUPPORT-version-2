import React from 'react'
import FileComponent from '../FileComponent/FileComponent.jsx'

function ExplicationDetails(props) {
  return (
    <div className="">
        <div className="space-y-2">
            {/*  */}
            <div className="flex justify-between items-center">
                <div className="">
                    <p className="font-bold">No Ref :</p>
                    <div className="p-2 bg-gray-100 border-[1px] rounded-lg">
                        {/* <p className="text-gray-800 text-md">{actualRequest.code_de}</p> */}
                        <p className="text-gray-800 text-md">{props.code}</p>
                    </div>
                </div>
                <div className="">
                    <p className="font-bold">Date d'initiation :</p>
                    <div className="p-2 bg-gray-100 border-[1px] rounded-lg">
                        <p className="text-gray-800 text-md">{props.dateInit}</p>
                        {/* <p className="text-gray-800 text-md">{actualRequest.date_init}</p> */}
                    </div>
                </div>
                
            </div>

            {/*  */}
            <div className="my-3">
                <p className="font-bold">Initiateur :</p>
                <div className="p-2 bg-gray-100 border-[1px] rounded-lg">
                    <p className="text-gray-800 text-md">{props.initiateur}</p>
                    {/* <p className="text-gray-800 text-md">{actualRequest.employer_initiateur}</p> */}
                </div>
            </div>
            {/*  */}
            <div className="my-3">
                <p className="font-bold">Motifs :</p>
                <div className="p-2 bg-gray-100 border-[1px] rounded-lg">
                    <p className="text-gray-800 text-md">{props.motif}</p>
                    {/* <p className="text-gray-800 text-md">{motifs.find(motif => motif.uuid === actualRequest.motif)?.nom}</p> */}
                </div>
            </div>
            {/*  */}
            <div className="space-y-2 items-center">
                <p className="font-bold">Description :</p>
                <div className="p-2 bg-gray-100 border-[1px] rounded-lg">
                    <p className="text-gray-800 text-md">{props.description}</p>
                    {/* <p className="text-gray-800 text-md">{actualRequest.description}</p> */}
                </div>
            </div>

            {/* Files */}
            <div>
                <div className="space-y-2 items-center">
                    <p className="font-bold">Fichier(s) :</p>
                    <div className="p-2 rounded-lg flex space-x-2 flex-wrap">
                        {/* <p className="text-gray-800 text-md">{actualRequest.description}</p> */}
                        {
                            props.file?.length === 0 || !props.file ?
                            <span className='italic'>Aucun fichier</span>:
                            props.file?.map(map=><FileComponent />)
                        }
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ExplicationDetails