import React from 'react'

function DetailCard(props) {
  return (
    <div className={`${props.borderColor} border-l-[3px] border-r-[1px] border-t-[1px] border-b-[1px] p-2`}>
        <div>
            <p>{props.name}</p>
        </div>
        <div>
            <p>
                {props.description}
            </p>
        </div>
        <div className="flex items-center my-2 flex-wrap">
            {/* <FileComponent fileName="Permission d'absence"/> */}
        </div>
        <div className="flex justify-end">
            <p className="text-xs">
                {props.date}
            </p>
        </div>
    </div>
  )
}

export default DetailCard