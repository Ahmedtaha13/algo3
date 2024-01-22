using System;
using System.Linq;

public class Program
{
    public static void Main()
    {
        Console.WriteLine(IsPalindrome("racecar"));
        Console.WriteLine(IsPalindrome("hello")); 
        Console.WriteLine(IsPalindrome("level")); 
        Console.WriteLine(IsPalindrome("")); 
        Console.WriteLine(IsPalindrome("a")); 
    }

    public static bool IsPalindrome(string word)
    {
        
        if (string.IsNullOrEmpty(word) || word.Length == 1)
        {
            return true;
        }

       
        if (word[0] != word[word.Length - 1])
        {
            return false;
        }

       
        return IsPalindrome(word.Substring(1, word.Length - 2));
    }
}