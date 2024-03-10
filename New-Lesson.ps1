
$Max = $(Get-ChildItem -Directory).Name `
    | Foreach-Object { "$_" -replace '\D+(\d+)', '$1' } `
    | Measure-Object -Maximum `
    | Select-Object -Property 'Maximum'

$MaxInt = [int]$Max.Maximum
Copy-Item -Recurse "lesson_$MaxInt" "lesson_$($MaxInt + 1)"