#include <iostream>

using namespace std;

void CinFunc()
{
    char name[50];
    int age;
    cout << "请输入您的名称、 年龄: ";
    cin >> name >> age;
    cout << "您的名称是: " << name << "年龄: " << age << endl;
}

int main()
{
    char str[] = "Hello wsx";
    cout << "Value of str is " << str << endl;

    CinFunc();

    return 0;
}