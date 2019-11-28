class Bob {
  hey(phrase: string) {
    phrase = phrase.trim();

    // const question = phrase.endsWith('?');
    // let shouting = true;
    // let letters = false;
    // for (let i = 0; i < phrase.length; i++) {
    //   const c = phrase[i];
    //   if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
    //     letters = true;
    //     if (c >= 'a' && c <= 'z') {
    //       shouting = false;
    //       break;
    //     }
    //   }
    // }
    // shouting = letters && shouting;

    const upper = phrase.toUpperCase();
    const lower = phrase.toLowerCase();
    const shouting = upper === phrase && upper !== lower;
    const question = phrase.endsWith('?');

    if (phrase === '') {
      return 'Fine. Be that way!';
    } else if (shouting && question) {
      return "Calm down, I know what I'm doing!";
    } else if (shouting) {
      return 'Whoa, chill out!';
    } else if (question) {
      return 'Sure.';
    }

    return 'Whatever.';
  }
}

export default Bob;
