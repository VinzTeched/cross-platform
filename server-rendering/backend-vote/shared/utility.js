export function handleModifyAnsVote(answers, answerId, increment) {
    return answers.map(answer => {
        if(answer.answerId !== answerId) {
            return answer;
        } else {
            return {... answer, upvotes: answer.upvotes + increment}
        }
    });
   // render();
}