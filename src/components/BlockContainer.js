import Block from "./Block"
import './stylesheets/BlockContainer.scss'

function BlockContainer({blocks, setSelectedBlock}) {
    return (
        <div className="BlockContainer">
            {blocks.map((block, index) => 
                <Block key={index} blockData={block} setSelectedBlock={setSelectedBlock}/>
            )}
        </div>
    )
}

export default BlockContainer