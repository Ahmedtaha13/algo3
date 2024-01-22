function IsPalindrome(s: string): boolean;
var
    i, len: integer;
begin
    len := length(s);
    for i := 1 to len div 2 do
    begin
        if s[i] <> s[len - i + 1] then
        begin
            IsPalindrome := false;
            exit;
        end;
    end;
    IsPalindrome := true;
end;
