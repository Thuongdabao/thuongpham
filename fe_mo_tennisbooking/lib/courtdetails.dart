import 'package:fe_mo_tennisbooking/model/court.dart';
import 'package:flutter/material.dart';
import 'package:flutter_rating_bar/flutter_rating_bar.dart';
import 'package:get/get.dart';

class CourtDetails extends StatelessWidget {
  const CourtDetails(this.court);

  final Court court;

  @override
  Widget build(BuildContext context) {
    const title = 'Court Details:';
    return Scaffold(
      appBar: AppBar(
        title: const Text(title),
      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Image.network(
              court.image,
              height: Get.height * 0.3,
              width: double.infinity,
            ),
            Align(
              alignment: Alignment.centerLeft,
              child: Text(
                "Court name: ${court.name}",
                style: const TextStyle(fontSize: 30),
              ),
            ),
            const Text(
              "Address: ",
              style: TextStyle(fontSize: 30),
            ),
            const Text(
              "Price: ",
              style: TextStyle(fontSize: 30),
            ),
            const Text(
              "Owner: ",
              style: TextStyle(fontSize: 30),
            ),
            Row(
              children: [
                const Text(
                  "Rating: ",
                  style: TextStyle(fontSize: 30),
                ),
                RatingBar.builder(
                  initialRating: court.rating.toDouble(),
                  minRating: 1,
                  direction: Axis.horizontal,
                  allowHalfRating: true,
                  itemCount: 5,
                  itemPadding: const EdgeInsets.symmetric(horizontal: 4.0),
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
              onPressed: () {}, // book screen
              child: const Text("Select court"),
            )
          ],
        ),
      ),
    );
  }
}
