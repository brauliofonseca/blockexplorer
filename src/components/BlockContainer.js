import Block from "./Block"
import './stylesheets/BlockContainer.scss'

function BlockContainer({blocks}) {
    return (
        <div className="BlockContainer">
            {blocks.map((block, index) => 
                <Block key={index} blockData={block}/>
            )}
        </div>
    )
}

export default BlockContainer