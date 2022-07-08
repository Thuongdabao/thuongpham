import 'package:fe_mo_tennisbooking/model/court.dart';
import 'package:fe_mo_tennisbooking/signupscreen.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'loginscreen.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: SizedBox(
          width: double.infinity,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              const Text(
                "Hello There!",
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 40),
              ),
              // Text(
              //   "Welcome",
              //   textAlign: TextAlign.center,
              //   style: GoogleFonts.kanit(color: Colors.grey[700], fontSize: 15),
              // ),
              Image.network(
                dummyCourt.image,
                height: Get.height * 0.3,
                width: double.infinity,
              ),
              Column(
                children: [
                  MaterialButton(
                    minWidth: 100,
                    height: 60,
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => const Logininscreen()),
                      );
                    },
                    color: Colors.indigoAccent[400],
                    shape: RoundedRectangleBorder(
                        side: const BorderSide(
                          color: Colors.black,
                        ),
                        borderRadius: BorderRadius.circular(40)),
                    child: const Text(
                      "Login",
                      style: TextStyle(
                          fontWeight: FontWeight.w600,
                          fontSize: 16,
                          color: Colors.white70),
                    ),
                  ),
                  const SizedBox(height: 20),
                  MaterialButton(
                    minWidth: 100,
                    height: 60,
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => SignupPage()),
                      );
                    },
                    color: Colors.redAccent,
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(40)),
                    child: const Text(
                      "Sign UP",
                      style: TextStyle(
                        fontWeight: FontWeight.w600,
                        fontSize: 16,
                      ),
                    ),
                  ),
                ],
              ),
              Container(),
            ],
          ),
        ),
      ),
    );
  }
}
