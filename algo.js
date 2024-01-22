ALGORITHM palindrome ;

VAR
    word:STRING;
    i,j:INTEGER;
BEGIN
    write ("donner un mot");
    read (word);
    FOR i FROM 0 TO long(word)/2 STEP 1  DO
        FOR j FROM long(word) TO long(word)/2 STEP -1  DO
            IF (word[i]=word[j]) THEN
                write("your word is palindrome")
                else
                write("your word is not palindrome")
            END_IF
        END_FOR
    END_FOR
END
