#include <bits/stdc++.h>
using namespace std;
int main()
{
	string buffer;
	string temp;
	cout<<"enter a string (only '#' for exit): ";
	while(cin>>buffer)
	{
		if(buffer=="#")break;
		temp = buffer;
		reverse(buffer.begin(),buffer.end());
		if(temp == buffer)cout<<"Palindrome!!\n";
		else cout<<"NOT Palindrome!!\n";
		cout<<"enter a string (only '#' for exit): ";
	}cout<<"GOOOOOOOOOOOOD bye!\n";
	return 0;
}
