const Message = ({ phrasesData,Frases}) => {
 
/* 1:10 */

    return (
        <div className="container">
            <p>{phrasesData}</p>
            <p className="parrafo">{Frases}</p>
        </div>

    )

}

export default Message