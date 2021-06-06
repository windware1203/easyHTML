#include <stdio.h>
#include <string.h>
int main()
{
      char a[105];
      int i;
      printf("Enter your string(EOF for exit):");
      while(scanf("%s",a)!=EOF)
      {
          int l=strlen(a);
          for(i=0;i<l/2;i++)
          {
              if(a[i]!=a[l-i-1]) {printf("NOT Palindrome\n");break;}
          }
          if(i>=l/2) printf("Palindrome\n");
      }
      return 0;
}