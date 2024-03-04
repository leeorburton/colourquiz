export function getAllQuestions() {
    return questions;
}

export function getQuestionById(id) {
    return questions.find(item => item.id === id)
}

export const questions = [
    {
        id: 1,
        title: 'How old are you?',
        options: ['<18', '19-30', '31-40', '>40'],
        prev: null,
        next: '2'
    },
    {
        id: 2,
        title: 'What\'s your favourite music genre?',
        options: ['Pop', 'Jazz', 'EDM', 'Country'],
        prev: 1,
        next: 3
    },
    {
        id: 3,
        title: 'What is your astrology sign?',
        options: ['Fire', 'Air', 'Wind', 'Water'],
        prev: 2,
        next: null
    }
]