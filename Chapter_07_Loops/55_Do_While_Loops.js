let retry = 1;
do {
    console.log(`Retry ${retry}: Please enter your password.`);
    retry++;
} while (retry <= 5);