let question = {
  1: () => {
    let a = 3;
    let b = new Number(3);
    let c = 3;

    console.log(a == b);
    console.log(a === b);
    console.log(b === c);
    // your answer :
    // 1.
    // 2.
    // 3.
  },
  2: () => {
    let greeting;
    greetign = {}; // Typo!
    console.log(greetign);
    // your answer :
  },


  3: () => {
    function sum(a, b) {
      return a + b;
    }

    console.log(sum(1, "2"));
    // your answer :
  },



  4: () => {
    function getPersonInfo(one, two, three) {
      console.log(one);
      console.log(two);
      console.log(three);
    }

    const person = "Lydia";
    const age = 21;

    getPersonInfo`${person} is ${age} years old`;
    // your answer :

  },




  5: () => {
        function getInfo(member, year) {
            member.name = 'Lydia';
            year = '1998';
        }
            
        const person = { name: 'Sarah' };
        const birthYear = '1997';
        
        getInfo(person, birthYear);
        
        console.log(person, birthYear);
        // your answer :

    },



  6: () => {
    function getAge(...args) {
        console.log(typeof args);
    }
    
    getAge(21);
    // your answer :

  },


  7: () => {
    const obj = { a: 'one', b: 'two', a: 'three' };
    console.log(obj);
    // your answer :


  },


  8: () => {
    const a = {};
    const b = { key: 'b' };
    const c = { key: 'c' };

    a[b] = 123;
    a[c] = 456;

    console.log(a[b]);
    // your answer :




  },


  9: () => {
    const foo = () => console.log('First');
    const bar = () => setTimeout(() => console.log('Second'));
    const baz = () => console.log('Third');

    bar();
    foo();
    baz();
    
    // your answer :


  },

  10: () => {
    (() => {
        let x, y;
        try {
          throw new Error();
        } catch (x) {
          (x = 1), (y = 2);
          console.log(x);
        }
        console.log(x);
        console.log(y);
    })();
    // your answer :


    
  }
};
// question[1]();
// question[2]();
// question[3]();
// question[4]();
// question[5]();
// question[6]();
// question[7]();
// question[8]();
// question[9]();
question[10]();