// These functions are part of our SASS API
// for fetching `tokens` and reporting errors.

@function output-map-properties($map, $level: 1) {
  @if type-of($map) != 'map' {
    @return null;
  }

  $output: '';
  // TODO: dart-sass does not allow for line-break characters.
  $newline: '\A ';

  @if $level == 1 {
    @each $key, $value in $map {
      $output: $output +
        '#{$newline}- #{$key} #{output-map-properties($value, $level + 1)}';
    }
  } @else {
    $output: '(';
    $index: 1;

    @each $key, $value in $map {
      $separator: if($index < length($map), ', ', '');
      $output: $output +
        '#{$key}#{$separator}#{output-map-properties($value, $level + 1)}';
      $index: $index + 1;
    }

    $output: $output + ')';
  }

  @return $output;
}

@function available-map-properties($id, $map, $property) {
  @return '#{$id} `#{$property}` not found. Available properties: #{output-map-properties($map)}';
}
