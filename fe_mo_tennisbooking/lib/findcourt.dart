import 'package:flutter/material.dart';

class findCourts extends StatelessWidget {
  const findCourts({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    const title = 'Find Court:';
    return MaterialApp(
      title: title,
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: const Text(title),
        ),
        body: SafeArea(
          child: Stack(children: [
            Center(
              child: Scaffold(
                // floatingActionButton: ,
                body: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Center(
                      child: Column(
                        children: [
                          SizedBox(
                            width: 250,
                            height: 50,
                            child: TextField(
                              decoration: InputDecoration(
                                hintText: 'Location...',
                                enabledBorder: OutlineInputBorder(
                                  borderSide: const BorderSide(
                                      width: 3, color: Colors.blue),
                                  borderRadius: BorderRadius.circular(15),
                                ),
                                focusedBorder: OutlineInputBorder(
                                  borderSide: const BorderSide(
                                      width: 3, color: Colors.red),
                                  borderRadius: BorderRadius.circular(15),
                                ),
                              ),
                            ),
                          ),
                          const SizedBox(width: 50),
                          SizedBox(
                            width: 180,
                            height: 50,
                            child: TextField(
                              decoration: InputDecoration(
                                hintText: 'dd/mm/yy',
                                enabledBorder: OutlineInputBorder(
                                  borderSide: const BorderSide(
                                      width: 3, color: Colors.blue),
                                  borderRadius: BorderRadius.circular(15),
                                ),
                                focusedBorder: OutlineInputBorder(
                                  borderSide: const BorderSide(
                                      width: 3, color: Colors.red),
                                  borderRadius: BorderRadius.circular(15),
                                ),
                                suffixIcon: IconButton(
                                  onPressed: () {
                                    //_selectDate(context);
                                    //print(selectedDate);
                                  },
                                  icon: const Icon(
                                    Icons.date_range_outlined,
                                    color: Colors.blue,
                                  ),
                                ),
                              ),
                            ),
                          ),
                          const SizedBox(
                            width: 50,
                          ),
                          ElevatedButton(
                              onPressed: () {}, child: const Text("Find"))
                        ],
                      ),
                    ),
                    const SizedBox(height: 40)
                  ],
                ),
              ),
            ),
          ]),
        ),
      ),
    );
  }
}
