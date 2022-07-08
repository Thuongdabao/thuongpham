// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'dart:convert';

class Court {
  final String id;
  final String name;
  final String address;
  final num price;
  final String ownerId;
  final String group;
  final num rating;
  final String image;
  Court({
    required this.id,
    required this.name,
    required this.address,
    required this.price,
    required this.ownerId,
    required this.group,
    required this.rating,
    required this.image,
  });

  Court copyWith({
    String? id,
    String? name,
    String? address,
    num? price,
    String? ownerId,
    String? group,
    num? rating,
    String? image,
  }) {
    return Court(
      id: id ?? this.id,
      name: name ?? this.name,
      address: address ?? this.address,
      price: price ?? this.price,
      ownerId: ownerId ?? this.ownerId,
      group: group ?? this.group,
      rating: rating ?? this.rating,
      image: image ?? this.image,
    );
  }

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'id': id,
      'name': name,
      'address': address,
      'price': price,
      'ownerId': ownerId,
      'group': group,
      'rating': rating,
      'image': image,
    };
  }

  factory Court.fromMap(Map<String, dynamic> map) {
    return Court(
      id: map['id'] as String,
      name: map['name'] as String,
      address: map['address'] as String,
      price: map['price'] as num,
      ownerId: map['ownerId'] as String,
      group: map['group'] as String,
      rating: map['rating'] as num,
      image: map['image'] as String,
    );
  }

  String toJson() => json.encode(toMap());

  factory Court.fromJson(String source) =>
      Court.fromMap(json.decode(source) as Map<String, dynamic>);

  @override
  String toString() {
    return 'Court(id: $id, name: $name, address: $address, price: $price, ownerId: $ownerId, group: $group, rating: $rating, image: $image)';
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;

    return other is Court &&
        other.id == id &&
        other.name == name &&
        other.address == address &&
        other.price == price &&
        other.ownerId == ownerId &&
        other.group == group &&
        other.rating == rating &&
        other.image == image;
  }

  @override
  int get hashCode {
    return id.hashCode ^
        name.hashCode ^
        address.hashCode ^
        price.hashCode ^
        ownerId.hashCode ^
        group.hashCode ^
        rating.hashCode ^
        image.hashCode;
  }
}

Court dummyCourt = Court(
  id: '',
  name: 'Thuong hahahahahahahahahaha',
  address: '',
  price: 0,
  ownerId: '',
  group: '',
  rating: 3,
  image:
      'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
);

List<Court> courts = [
  dummyCourt,
  dummyCourt.copyWith(rating: 5),
  dummyCourt,
  dummyCourt,
  dummyCourt,
];
