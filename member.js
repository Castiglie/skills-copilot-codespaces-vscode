function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['js', 'html', 'css'],
        sayName: function () {
            console.log(this.name);
        }
    };
    member.sayName();
    console.log(member.skills);
    console.log(member.skills[1]);
}