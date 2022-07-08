import 'package:fe_mo_tennisbooking/viewcourt.dart';
import 'package:flutter/material.dart';

class Successfull extends StatelessWidget {
  const Successfull({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SizedBox(
        width: double.infinity,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Container(),
            Image.asset("assets/xong.jpg"),
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (context) => const ViewCourts()));
              },
              child: const Text("Return home"),
            ),
            Container(),
            Container(),
          ],
        ),
      ),
    );
  }
}
