import 'package:fe_mo_tennisbooking/successscreen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_rating_bar/flutter_rating_bar.dart';

class bookingCourt extends StatelessWidget {
  const bookingCourt({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    const title = 'Court Details:';
    return MaterialApp(
        title: title,
        debugShowCheckedModeBanner: false,
        home: Scaffold(
          appBar: AppBar(
            title: const Text(title),
          ),
          body: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Scaffold(
              body: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Image.asset(
                    "assets/Tennisbg.jpg",
                    height: 100,
                    width: 100,
                  ),
                  Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      const Text("Court name: "),
                      const Text("Address: "),
                      const Text("Price: "),
                      const Text("Owner: "),
                      const Text("Time booking: "),
                      Row(
                        children: [
                          const Text("Rating: "),
                          RatingBar.builder(
                            initialRating: 3,
                            minRating: 1,
                            direction: Axis.horizontal,
                            allowHalfRating: true,
                            itemCount: 5,
                            itemPadding:
                                const EdgeInsets.symmetric(horizontal: 4.0),
                            itemBuilder: (context, _) => const Icon(
                              Icons.star,
                              color: Colors.amber,
                            ),
                            onRatingUpdate: (rating) {
                              print(rating);
                            },
                          ),
                        ],
                      ),
                      ElevatedButton(
                        onPressed: () {
                          Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => const Successfull()));
                        }, // success screen
                        child: const Text("Confirm"),
                      ),
                    ],
                  )
                ],
              ),
            ),
          ),
        ));
  }
}
