class Bob {
  hey(phrase: string) {
    phrase = phrase.trim();

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
