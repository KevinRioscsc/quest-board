export const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)

    const [removed] = result.splice(startIndex,1)
    result.splice(endIndex,0,removed);

    return result;
}

export const reorderCards = (Cards, source, destination) => {
    const current = Cards[source.droppableId].datacard
    const next = Cards[destination.droppableId].datacard
    const target = current[source.index]

    if(source.droppableId === destination.droppableId){
        const reordered = reorder(current, source.index, destination.index)

        return Cards.map((item, index) => 
        index === parseInt(source.droppableId)
            ?{
                ...item,
                datacard:reordered
            }
            :{
                ...item
            }
    )
    }

    //moving to a different list

    current.splice(source.index, 1)

    next.splice(destination.index, 0, target)

    return Cards.map((item, index) => {
                if(index === parseInt(source.droppableId)) {
                    return {
                        ...item,
                        datacard:current
                     }
                    
                }
                else if(index === parseInt(destination.droppableId)){
                    return {
                        ...item,
                        datacard:next
                     }
                }else{
                    return {
                        ...item
                    }
                }
                    
                    
    })
}
