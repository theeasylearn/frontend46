/*
Create a program to simulate a small event registration system. Use a Set<String> to store unique participant names and a Map<String, int> to track their registration fees. Initialize with 3 participants and fees. Use a do-while loop to allow the user to add new participants or update fees (input name and fee) until they enter "exit". Use a for...in loop
to display all participants and their fees, and check if any fee is below 50 using where() method, printing a payment alert if true.    */
void main()
{
    Set<String> names = {'aakal','om','sakshi'};
    Map<String,int> students = new Map<String,int>();
    print(names);
    students.add("aakal",80); 
    students.add("om",70); 
    students.add("sakshi",40); 
    print(students);
}