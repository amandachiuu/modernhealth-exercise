const programInitialState = [
    {"program_id":1,"title":"Mindfulness","description":"Mindfulness is the basic human ability to be fully present, aware of where we are and what we’re doing, and not overly reactive or overwhelmed by what’s going on around us. In this module...","image_id":"meditation.jpg"},
    {"program_id":2,"title":"Values","description":"Moral values refer to a set of principles that guide an individual on how to evaluate right versus wrong. People generally apply moral values to justify decisions, intentions and actions, and it also defines the personal character of a person. In this module...","image_id":"compass.jpg"}
]
  
function programs(state = programInitialState, action) {
    switch (action.type) {
        case 'UPDATE_PROGRAMS':
        return action.programs
        default:
        return state
    }
}

export default programs;