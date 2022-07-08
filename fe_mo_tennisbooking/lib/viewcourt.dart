import 'package:fe_mo_tennisbooking/model/court.dart';
import 'package:flutter/material.dart';

import 'courtdetails.dart';

class ViewCourts extends StatelessWidget {
  const ViewCourts({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    const title = 'Court List';

    return MaterialApp(
      title: title,
      debugShowCheckedModeBanner: false,
      home: Scaffold(
          appBar: AppBar(
            title: const Text(title),
          ),
          body: ListView.builder(
            itemCount: courts.length,
            itemBuilder: (context, index) {
              return Padding(
                padding: const EdgeInsets.all(8.0),
                child: Container(
                  decoration: BoxDecoration(
                    border: Border.all(),
                    borderRadius: BorderRadius.circular(25),
                  ),
                  child: ListTile(
                    leading: Image.asset("assets/Tennisbg.jpg"),
                    title: Text(
                      "Name: ${courts[index].name}",
                      overflow: TextOverflow.ellipsis,
                      maxLines: 1,
                    ),
                    subtitle: const Text("Address:"),
                    trailing: RichText(
                      text: TextSpan(
                        children: [
                          TextSpan(
                              text: '${courts[index].rating}',
                              style: const TextStyle(color: Colors.black)),
                          const WidgetSpan(
                            child:
                                Icon(Icons.star, color: Colors.amber, size: 14),
                          ),
                        ],
                      ),
                    ),
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => CourtDetails(courts[index]),
                        ),
                      );
                    },
                  ),
                ),
              );
            },
          )),
    );
  }
}
