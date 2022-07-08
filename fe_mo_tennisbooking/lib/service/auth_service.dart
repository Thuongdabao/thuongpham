import 'package:dio/dio.dart';

class AuthService {
  Future signup(String name, String pass) async {}

  Future login(String name, String pass) async {
    // const api = "https://localhost:44372/api/v1.0/User/Login";
    const api = "https://192.168.11.15:44372/api/v1.0/TennisCourts?page=1";
    final body = {
      "userName": 'String',
      "password": 'String',
    };
    // final res = await post(api, body);
    try {
      final res = await Dio().get(api);
      print(res);
    } on Exception catch (e) {
      print(e);
    }
  }
}
