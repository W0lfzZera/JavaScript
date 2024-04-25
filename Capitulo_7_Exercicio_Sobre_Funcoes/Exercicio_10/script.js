function decrementa(num) {
  do {
    if (num % 2 == 0) {
      console.log(num);
    }
    num--;
  } while (num >= 0);
}

decrementa(7);
decrementa(2);
decrementa(27);
